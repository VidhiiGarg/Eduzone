export const photos = {
  hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85',
  classroom: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
  students: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85',
  science: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85',
  math: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=85',
  study: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85',
  library: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85',
  lab: 'https://images.unsplash.com/photo-1581093458791-9d42e3c06d9d?auto=format&fit=crop&w=1000&q=85',
  writing: 'https://images.unsplash.com/photo-1455390582262-044cde9d39c8?auto=format&fit=crop&w=1000&q=85',
  board: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85',
}

export type Course = { slug: string; title: string; category: string; classes: string; summary: string; subjects: string[]; benefits: string[]; image: string; eyebrow: string }
export const courses: Course[] = [
  { slug: 'iit-jee', title: 'IIT-JEE Main & Advanced', category: 'Competitive', classes: 'Classes XI–XII & droppers', summary: 'Build strong Physics, Chemistry and Mathematics foundations through structured teaching, practice and regular assessment.', subjects: ['Physics', 'Chemistry', 'Mathematics'], benefits: ['Concept-led classroom learning', 'Graded problem practice', 'Regular tests and feedback'], image: photos.math, eyebrow: 'ENGINEERING ENTRANCE' },
  { slug: 'neet', title: 'NEET Preparation', category: 'Competitive', classes: 'Classes XI–XII & droppers', summary: 'A focused preparation path across Biology, Physics and Chemistry, supported by deliberate practice and academic guidance.', subjects: ['Physics', 'Chemistry', 'Biology'], benefits: ['Clear subject foundations', 'Practice aligned to the syllabus', 'Revision and test routines'], image: photos.science, eyebrow: 'MEDICAL ENTRANCE' },
  { slug: 'foundation', title: 'Foundation Classes IX–X', category: 'School', classes: 'Classes IX–X', summary: 'Make school science and mathematics more meaningful while developing the reasoning habits that support future study.', subjects: ['Mathematics', 'Science', 'Reasoning'], benefits: ['Strong fundamentals', 'Curiosity-led problem solving', 'Steady academic practice'], image: photos.study, eyebrow: 'BUILD THE BASE' },
  { slug: 'olympiad', title: 'Olympiad Preparation', category: 'Enrichment', classes: 'Classes VI–XII', summary: 'Explore challenging questions that encourage analytical thinking, precision and confidence beyond routine exercises.', subjects: ['Mathematics', 'Science', 'Logical reasoning'], benefits: ['Higher-order questions', 'Pattern recognition', 'Guided challenge practice'], image: photos.lab, eyebrow: 'THINK DEEPER' },
  { slug: 'senior-wing', title: 'Senior Wing XI–XII', category: 'School', classes: 'Classes XI–XII', summary: 'Keep school learning on track with structured subject support and a stronger understanding of core concepts.', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'], benefits: ['Concept reinforcement', 'Regular topic practice', 'Academic guidance'], image: photos.classroom, eyebrow: 'SENIOR SCHOOL' },
  { slug: 'boards', title: 'Board Exam Preparation', category: 'School', classes: 'Classes X & XII', summary: 'Prepare for board examinations with organised revision, question practice and clear subject guidance.', subjects: ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology'], benefits: ['Structured revision', 'Practice with exam-style questions', 'Feedback on progress'], image: photos.board, eyebrow: 'EXAM READY' },
]

export const faculty = [
  { name: 'Manish Kumar', role: 'Founder & Director', image: photos.math },
  { name: 'Sumant Raj', role: 'Founder & Director', image: photos.classroom },
  { name: 'Madhusudan Gupta', role: 'Founder & Director', image: photos.science },
]

export const galleryItems = [
  { image: photos.classroom, category: 'Classroom', caption: 'Learning through thoughtful classroom practice' },
  { image: photos.library, category: 'Campus', caption: 'A quiet corner for focused study' },
  { image: photos.science, category: 'Student Activities', caption: 'Curiosity starts with a good question' },
  { image: photos.students, category: 'Classroom', caption: 'Growing together through learning' },
  { image: photos.lab, category: 'Student Activities', caption: 'Exploring ideas beyond the page' },
  { image: photos.study, category: 'Faculty', caption: 'Guidance, practice and reflection' },
  { image: photos.writing, category: 'Campus', caption: 'Making space for deep concentration' },
  { image: photos.board, category: 'Events', caption: 'Every step forward deserves to be celebrated' },
]

export const faqs = [
  { q: 'Which courses does EDUZONE offer?', a: 'EDUZONE offers IIT-JEE Main and Advanced, NEET, Foundation for Classes IX–X, Olympiad preparation, senior school support and Board exam preparation.' },
  { q: 'How can I enquire about admissions?', a: 'Call either of our counsellor numbers or use the enquiry form. The form opens WhatsApp with your message ready to send.' },
  { q: 'Does EDUZONE prepare students for JEE and NEET?', a: 'Yes. Dedicated programmes are available for IIT-JEE Main and Advanced and for NEET.' },
  { q: 'Where is EDUZONE located?', a: '2nd Floor, EDUZONE Building, near PNB Bank, Devli Road, Khanpur, New Delhi – 110062.' },
  { q: 'How can I contact the institute?', a: 'Call +91 83769 46269 or +91 99557 24764. The team is available Monday to Saturday, 9:00 AM–7:00 PM.' },
  { q: 'How do I find out about the next batch?', a: 'Batch schedules can change through the year. Contact the team directly for the current start dates and timings.' },
]
