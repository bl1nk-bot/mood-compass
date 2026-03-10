fn main() {
    prost_build::compile_protos(&["../proto/settings.proto"], &["../proto/"]).unwrap();
    tauri_build::build()
}
