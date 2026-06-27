# Complete Setup Guide: $0 Agentic Coding Stack

This guide walks you through setting up a production-ready agentic coding environment using 100% free models. You will configure **Cohere North Mini Code** (via OpenRouter) and **GLM-5.2** (via Cloudflare Workers AI) to work with local developer agents like **Hermes Agent** or **OpenCode**.

---

## ⚡ Method 1: Cohere North Mini Code (Free via OpenRouter)

North Mini Code is a 30B Mixture-of-Experts (MoE) model with only 3B active parameters, specifically tuned for multi-step agentic coding tasks.

### Step 1: Create an OpenRouter Account
1. Go to [OpenRouter](https://openrouter.ai/).
2. Sign up or log in (no credit card or billing details required for free models).

### Step 2: Generate an API Key
1. Navigate to **Keys** (or Account Settings -> API Keys).
2. Click **Create Key** and give it a name (e.g., `Coding Agents`).
3. Copy the generated key immediately (it looks like `sk-or-v1-...`).

### Step 3: Configure Environment Variables
Export the key in your terminal or add it to your `.env` file:
```bash
# On Linux/macOS
export OPENROUTER_API_KEY=your_copied_api_key_here

# On Windows (PowerShell)
$env:OPENROUTER_API_KEY="your_copied_api_key_here"
```

### Step 4: Add to your Agent Config (OpenCode / Hermes)
Set your agent base URL to route through OpenRouter:
- **Base URL**: `https://openrouter.ai/api/v1`
- **Model ID**: `cohere/north-mini-code:free`

---

## ☁️ Method 2: GLM-5.2 (Free via Cloudflare Workers AI)

Run GLM-5.2 (a high-quality coding model with tool calling and a 262k context window) for $0 with no daily caps.

### Step 1: Create a Cloudflare Account
1. Sign up at [Cloudflare](https://dash.cloudflare.com/).
2. Go to your dashboard (no paid subscription required).

### Step 2: Locate your Account ID
1. From the Cloudflare home page, click on any domain or navigate to the **Workers & Pages** tab on the left sidebar.
2. In the right-hand panel, find and copy your **Account ID**.

### Step 3: Create an API Token
1. Go to **My Profile** (top right user icon -> My Profile).
2. Click **API Tokens** -> **Create Token**.
3. Choose **Create Custom Token**.
4. Configure permissions:
   - **Account** -> **Workers AI** -> **Edit**
5. Click **Continue to summary** and **Create Token**.
6. Copy the API Token.

### Step 4: Configure OpenCode / Hermes Provider
Add Cloudflare as a custom OpenAI-compatible provider:
- **Base URL**: `https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/v1`
  *(Replace `YOUR_ACCOUNT_ID` with the ID from Step 2)*
- **Headers**:
  - `Authorization: Bearer YOUR_API_TOKEN`
- **Model ID**: `@cf/zai-org/glm-5.2`

---

## 🛠️ Step 5: Start Your Agent

Once your credentials are set, launch your coding agent environment (e.g. `opencode` or `hermes-agent`) pointing to the model you configured. 

For example, in a local CLI agent:
```bash
# Run using the free Cohere model via OpenRouter
hermes-agent --model cohere/north-mini-code:free --api-key $OPENROUTER_API_KEY
```

You now have a full-featured, zero-cost developer agent capable of reading directories, modifying code, and executing terminal tasks.
