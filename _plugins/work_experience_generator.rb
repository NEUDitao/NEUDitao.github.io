module Jekyll
  class WorkExperienceGenerator < Generator
    safe true
    priority :low

    def generate(site)
      work_experiences = []
      
      # Read all markdown files from _work_experience directory
      work_experience_dir = File.join(site.source, '_work_experience')
      
      if Dir.exist?(work_experience_dir)
        Dir.glob(File.join(work_experience_dir, '*.md')).each do |file_path|
          begin
            # Read the file content
            content = File.read(file_path)
            
            # Split front matter and content
            if content =~ /\A(---\s*\n.*?\n?)(---\s*\n?)(.*)/m
              front_matter = $1
              markdown_content = $3
              
              # Parse YAML front matter
              front_matter_data = YAML.safe_load(front_matter)
              
              # Process markdown content
              markdown_processor = site.find_converter_instance(Jekyll::Converters::Markdown)
              processed_content = markdown_processor.convert(markdown_content)
              
              # Create work experience entry
              work_experience = {
                'company' => front_matter_data['company'],
                'job_title' => front_matter_data['job_title'],
                'date_range' => front_matter_data['date_range'],
                'image_badge' => front_matter_data['image_badge'],
                'programming_languages' => front_matter_data['programming_languages'],
                'description' => processed_content.strip
              }
              
              work_experiences << work_experience
            end
          rescue => e
            Jekyll.logger.warn "Error processing work experience file #{file_path}: #{e.message}"
          end
        end
        
        # Sort by filename instead of order
        work_experiences = work_experiences.zip(Dir.glob(File.join(work_experience_dir, '*.md')).sort)
                                           .sort_by { |exp, fname| File.basename(fname) }
                                           .map { |exp, _| exp }
        
  end
end
