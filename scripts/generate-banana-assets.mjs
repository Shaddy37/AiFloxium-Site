import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const API_KEY = process.env.GOOGLE_AI_STUDIO_API_KEY;

if (!API_KEY) {
  console.error("No API key found in .env.local");
  process.exit(1);
}

const assets = [
  // Capabilities / Sticky Scroll Section
  { 
    name: "banana-ai", 
    prompt: "Cinematic macro photography of a glowing neural network filament structure suspended in a dark zinc void. Minimalist, glassmorphism, ethereal silver light, 8k resolution, shallow depth of field, premium tech aesthetic." 
  },
  { 
    name: "banana-code", 
    prompt: "Abstract 3D visualization of cascading translucent code blocks reflecting off a pool of liquid mercury. Monochrome zinc palette, sleek, high-speed development theme, cinematic lighting, 8k, sharp details." 
  },
  { 
    name: "banana-brain", 
    prompt: "A cluster of glowing, geometric crystalline shards suspended in mid-air, representing multiple AI models. Prismatic silver reflections, dark background, complex intelligence theme, 8k, bokeh effect." 
  },
  { 
    name: "banana-data", 
    prompt: "Sleek, encrypted glass data tunnels with pulsing silver light waves flowing through them. Enterprise security theme, liquid metal textures, ultramodern infrastructure, 8k, cinematic." 
  },
  
  // Project Focus Section (FocusRail)
  { 
    name: "project-automation", 
    prompt: "Extreme close-up of a high-tech metallic mechanical arm interacting with a suspended holographic interface. Precision automation theme, silver and charcoal tones, cinematic macro, 8k." 
  },
  { 
    name: "project-logic", 
    prompt: "A futuristic translucent glass tablet floating in a dark studio, displaying clean minimalist node-based logic visualizations. Claude Code aesthetic, premium design, silver glow, 8k." 
  },
  { 
    name: "project-scale", 
    prompt: "Abstract assembly of silver geometric fragments merging into a perfect sphere. Symbolizing data extraction and scaling, metallic finish, dark zinc background, 8k, cinematic lighting." 
  },
  { 
    name: "project-secure", 
    prompt: "A minimalist silver signal tower emitted subtle concentric ripples of light into a dark, foggy atmosphere. Outbound agent theme, mysterious, high-end tech, 8k, cinematic." 
  },
  { 
    name: "project-voice", 
    prompt: "Macro shot of a pool of liquid silver vibrating to form intricate 3D sonic wave patterns. Voice AI theme, fluid dynamics, monochromatic, 8k, stunning lighting." 
  },

  // Testimonial Avatars (Still using 'avatar' name for compatibility)
  { 
    name: "avatar-1", 
    prompt: "Professional corporate portrait of a sleek, futuristic humanoid AI entity with a translucent glass shell, friendly and intelligent expression, studio lighting, shallow depth of field, 8k." 
  },
  { 
    name: "avatar-2", 
    prompt: "Close-up portrait of a professional AI assistant with a matte silver finish and glowing cyan eyes, clean studio background, minimalist, high-end photography, 8k." 
  },
  { 
    name: "avatar-3", 
    prompt: "Stylized portrait of a creative AI agent with floating holographic geometric shapes around its head, soft cinematic lighting, silver and white tones, premium aesthetic, 8k." 
  }
];

async function generateImages() {
  const outputDir = path.join(process.cwd(), "public", "images", "nano-banana");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Starting Nano Banana generation (15 assets)...`);

  for (const asset of assets) {
    try {
      console.log(`Generating ${asset.name}...`);
      
      // Using Imagen 3 via the v1beta endpoint
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3:generateImages?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt: asset.prompt }],
          parameters: { sampleCount: 1, aspectRatio: "1:1" }
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (data.predictions && data.predictions[0].bytesBase64Encoded) {
        const buffer = Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
        fs.writeFileSync(path.join(outputDir, `${asset.name}.png`), buffer);
        console.log(`✅ Saved: ${asset.name}.png`);
      } else {
        console.log(`⚠️ No image data returned for ${asset.name}. (Check API permissions for Imagen 3)`);
      }
    } catch (error) {
      console.error(`❌ Failed ${asset.name}:`, error.message);
    }
  }

  console.log("\nGeneration complete. Check public/images/nano-banana/");
}

generateImages();
