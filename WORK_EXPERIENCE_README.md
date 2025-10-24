# Work Experience System

This Jekyll site now uses a data-driven approach for managing work experience entries. Instead of manually editing HTML, you can now manage work experience through markdown files.

## How it works

1. **Markdown Files**: Each work experience entry is stored as a markdown file in the `_work_experience/` directory
2. **Front Matter**: Each file contains YAML front matter with metadata
3. **Jekyll Plugin**: A custom plugin (`work_experience_generator.rb`) processes these files and populates `site.data.work_experiences`
4. **Dynamic Template**: The `work_experience.html` template uses Liquid to iterate over the data

## Adding a new work experience

1. Create a new markdown file in `_work_experience/` directory
2. Use the following front matter structure:

```yaml
---
company: Company Name
job_title: Job Title
date_range: Start Date - End Date
image_badge: path/to/image.jpg
programming_languages: Language1, Language2, Language3
order: 1
---

Your job description here. You can use markdown formatting including links, bold text, etc.
```

3. The `order` field determines the display order (lower numbers appear first)
4. Build the site with `jekyll build` to see changes

## Front Matter Fields

- `company`: The company name
- `job_title`: Your job title/position
- `date_range`: Employment date range
- `image_badge`: Path to company logo/image
- `programming_languages`: Comma-separated list of technologies used
- `order`: Display order (optional, defaults to 999)

## Editing existing entries

Simply edit the markdown files in `_work_experience/` directory. The content supports full markdown formatting including links, lists, and emphasis.
