use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentConfig {
    pub command: String,
    pub args: Vec<String>,
    pub env: HashMap<String, String>,
}

impl AgentConfig {
    pub fn new(command: String) -> Self {
        Self {
            command,
            args: Vec::new(),
            env: HashMap::new(),
        }
    }

    pub fn with_args(mut self, args: Vec<String>) -> Self {
        self.args = args;
        self
    }

    pub fn with_env(mut self, env: HashMap<String, String>) -> Self {
        self.env = env;
        self
    }
}
