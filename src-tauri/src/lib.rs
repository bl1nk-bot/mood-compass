mod agent_manager;
mod config;
mod config_manager;
mod proto;

use agent_manager::{AgentInstance, AgentManager};
use config::AgentConfig;
use config_manager::{AgentsConfig, ConfigManager};
use std::collections::HashMap;
use std::sync::Arc;
use tauri::State;

pub struct AppState {
    pub agent_manager: Arc<AgentManager>,
    pub config_manager: Arc<ConfigManager>,
}

#[tauri::command]
fn spawn_agent(
    name: String,
    command: String,
    args: Vec<String>,
    env: HashMap<String, String>,
    state: State<'_, AppState>,
    app_handle: tauri::AppHandle,
) -> Result<AgentInstance, String> {
    let config = AgentConfig::new(command)
        .with_args(args)
        .with_env(env);

    state.agent_manager.spawn_agent(name, &config, app_handle)
}

#[tauri::command]
fn send_message(agent_id: String, message: String, state: State<'_, AppState>) -> Result<(), String> {
    state.agent_manager.send_message(&agent_id, &message)
}

#[tauri::command]
fn kill_agent(agent_id: String, state: State<'_, AppState>) -> Result<(), String> {
    state.agent_manager.kill_agent(&agent_id)
}

#[tauri::command]
fn list_agents(state: State<'_, AppState>) -> Vec<String> {
    state.agent_manager.list_running_agents()
}

#[tauri::command]
fn get_agents_config(state: State<'_, AppState>) -> AgentsConfig {
    state.config_manager.get_config()
}

#[tauri::command]
fn get_config_path(state: State<'_, AppState>) -> String {
    state.config_manager.get_config_path().to_string_lossy().to_string()
}

#[tauri::command]
fn add_agent_config(
    name: String,
    command: String,
    args: Vec<String>,
    env: HashMap<String, String>,
    state: State<'_, AppState>,
) -> Result<AgentsConfig, String> {
    let config = config_manager::AgentConfig { command, args, env };
    state.config_manager.add_agent(name, config)
}

#[tauri::command]
fn update_agent_config(
    name: String,
    command: String,
    args: Vec<String>,
    env: HashMap<String, String>,
    state: State<'_, AppState>,
) -> Result<AgentsConfig, String> {
    let config = config_manager::AgentConfig { command, args, env };
    state.config_manager.update_agent(name, config)
}

#[tauri::command]
fn remove_agent_config(name: String, state: State<'_, AppState>) -> Result<AgentsConfig, String> {
    state.config_manager.remove_agent(&name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    env_logger::init();

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            let agent_manager = Arc::new(AgentManager::new());
            let config_manager = Arc::new(ConfigManager::new(app.handle()).map_err(|e| e.to_string())?);
            let app_state = AppState { agent_manager, config_manager };
            app.manage(app_state);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            spawn_agent,
            send_message,
            kill_agent,
            list_agents,
            get_agents_config,
            get_config_path,
            add_agent_config,
            update_agent_config,
            remove_agent_config
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
