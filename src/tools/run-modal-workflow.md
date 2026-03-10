# Run Modal Workflow Tool

A tool for executing heavy compute workflows on Modal containers. Supports three workflow types:

- **issue**: Run Data Science workflows triggered from GitHub Issues
- **pr**: Run Data Science workflows triggered from GitHub Pull Requests  
- **notebook**: Run Jupyter Notebooks on Modal containers

This tool communicates with the Modal Built-in MCP (Model Context Protocol) to execute workflows asynchronously and returns the results.

## Required Environment Variables

- `MODAL_MCP_URL`: The URL of the Modal Built-in MCP endpoint
- `INTERNAL_MCP_SECRET_KEY`: The secret key for authentication with the MCP

## Usage

Use this tool when:
- You need to run computationally intensive data science tasks
- You want to execute Jupyter notebooks in a cloud environment
- You're working with GitHub Issues or PRs that require data analysis
