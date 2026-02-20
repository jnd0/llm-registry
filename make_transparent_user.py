try:
    from PIL import Image
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

input_path = "/Users/jaume/.gemini/antigravity/brain/0be3654e-dd02-41f0-8d1a-bfb873495968/mj_image_1771545419.png" # Assuming this is the path based on typical uploads, we'll try to find it first.
import glob
import os
# Find the latest png in the brain dir
brain_dir = "/Users/jaume/.gemini/antigravity/brain/0be3654e-dd02-41f0-8d1a-bfb873495968/"
png_files = glob.glob(os.path.join(brain_dir, "*.png"))
# Sort by modified time
png_files.sort(key=os.path.getmtime, reverse=True)

target_file = None
# Look for the user uploaded image (not our generated ones)
for f in png_files:
    if "llm_registry" not in f and "media_" not in f:
        target_file = f
        break

if not target_file:
    # fallback to the one we know the user uploaded based on the chat context if possible, or just the very latest png
    target_file = png_files[0]
    
print(f"Using image: {target_file}")
im = Image.open(target_file).convert("RGBA")
width, height = im.size
pixels = im.load()

# The background color
bg_color = (25, 26, 52) # approximated from the provided image

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # Calculate distance from background color
        dist = ((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2) ** 0.5
        
        if dist < 30: # If very close to background
            # Make it fully transparent
            pixels[x, y] = (r, g, b, 0)
        elif dist < 80:
            # Alpha blend the edges
            alpha = int(((dist - 30) / 50) * 255)
            pixels[x, y] = (r, g, b, alpha)

# Crop to square if it isn't (it looks roughly square with rounded corners, let's just use it as is for now)
im.save("src/app/icon.png", "PNG")
im.save("public/logo.png", "PNG")
print("Successfully processed user uploaded logo!")
