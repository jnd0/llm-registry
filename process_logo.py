try:
    from PIL import Image
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

input_path = "/Users/jaume/.gemini/antigravity/brain/0be3654e-dd02-41f0-8d1a-bfb873495968/media__1771545407428.jpg"
print(f"Using image: {input_path}")
im = Image.open(input_path).convert("RGBA")
width, height = im.size
pixels = im.load()

# Background color from the top left corner
bg_color = pixels[0,0]

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # Calculate distance from background color
        dist = ((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2) ** 0.5
        
        if dist < 40: # If very close to background
            # Make it fully transparent
            pixels[x, y] = (r, g, b, 0)
        elif dist < 90:
            # Alpha blend the edges
            alpha = int(((dist - 40) / 50) * 255)
            pixels[x, y] = (r, g, b, alpha)

im.save("src/app/icon.png", "PNG")
im.save("public/logo.png", "PNG")
# Save one for og-image
im_og = Image.open(input_path).convert("RGB")
im_og.save("src/app/opengraph-image.png", "PNG")
im_og.save("src/app/twitter-image.png", "PNG")
print("Successfully generated transparent logo!")
