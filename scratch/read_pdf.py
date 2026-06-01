import os
import pypdf

# Get absolute path of this script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))
# The project root is one level up
project_root = os.path.dirname(script_dir)
pdf_path = os.path.join(project_root, "shadab_shams_cv.pdf")

print(f"Reading PDF from: {pdf_path}")

if os.path.exists(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"--- Page {i+1} ---\n"
        text += page.extract_text() + "\n"
    
    output_path = os.path.join(script_dir, "extracted_cv.txt")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Successfully wrote extracted text to {output_path}")
else:
    print(f"File not found: {pdf_path}")
