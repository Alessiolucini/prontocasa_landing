#!/usr/bin/env python3
"""Remove the light background from the phone mockup image using flood fill from edges."""
from PIL import Image
from collections import deque

def flood_fill_transparent(img, start, threshold=35):
    """Flood fill from start position, making similar-colored pixels transparent."""
    pixels = img.load()
    w, h = img.size
    visited = set()
    queue = deque([start])
    start_color = pixels[start[0], start[1]]
    
    while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
            continue
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        
        visited.add((x, y))
        current = pixels[x, y]
        
        # Check if current pixel is similar to start color (within threshold)
        diff = sum(abs(current[i] - start_color[i]) for i in range(3))
        if diff > threshold * 3:
            continue
        
        # Make transparent
        pixels[x, y] = (current[0], current[1], current[2], 0)
        
        # Add neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                queue.append((nx, ny))

def main():
    img_path = "public/phone-mockup.png"
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    
    print(f"Image size: {w}x{h}")
    
    # Sample background color from corners
    px = img.load()
    corner_colors = [px[5, 5], px[w-5, 5], px[5, h-5], px[w-5, h-5]]
    print(f"Corner colors: {corner_colors}")
    
    # Flood fill from multiple edge points to catch the entire background
    # Use points along all four edges
    edge_points = []
    step = 20
    for x in range(0, w, step):
        edge_points.append((x, 0))           # top edge
        edge_points.append((x, h - 1))       # bottom edge
    for y in range(0, h, step):
        edge_points.append((0, y))            # left edge
        edge_points.append((w - 1, y))        # right edge
    
    # Also add corner points
    edge_points.extend([(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)])
    
    print(f"Flood filling from {len(edge_points)} edge points...")
    for point in edge_points:
        px = img.load()
        # Only flood fill if pixel is not already transparent and is light-colored
        color = px[point[0], point[1]]
        if color[3] > 0 and color[0] > 200 and color[1] > 200 and color[2] > 200:
            flood_fill_transparent(img, point, threshold=30)
    
    # Also add slight edge feathering for smoother look
    print("Adding edge feathering...")
    px = img.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a > 0:
                # Check if this pixel is near a transparent pixel (edge of phone)
                is_edge = False
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1), (-2, 0), (2, 0), (0, -2), (0, 2)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        if px[nx, ny][3] == 0:
                            is_edge = True
                            break
                if is_edge and r > 210 and g > 210 and b > 210:
                    # Semi-transparent for near-white edge pixels
                    px[x, y] = (r, g, b, int(a * 0.3))
    
    img.save(img_path)
    print(f"Saved transparent version to {img_path}")

if __name__ == "__main__":
    main()
