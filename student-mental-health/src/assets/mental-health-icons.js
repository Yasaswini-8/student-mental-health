// Mental Health Themed Icons and SVGs
const MentalHealthIcons = {
  // Brain icon for mental wellness
  brain: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 4C8 4 5 7 5 11c0 2.5 1.5 4.5 3.5 5.5C10 17.5 11 19 11 21v1h2v-1c0-2 1-3.5 2.5-4.5C18.5 15.5 20 13.5 20 11c0-4-3-7-7-7z"/>
      <path d="M8 11c0 1.5 1 2.5 2 2.5s2-1 2-2.5"/>
      <path d="M14 11c0 1.5 1 2.5 2 2.5s2-1 2-2.5"/>
    </svg>
  `,
  
  // Heart icon for emotional wellness
  heart: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  `,
  
  // Leaf icon for growth and healing
  leaf: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M11 20A7 7 0 0 1 9.8 6.4C6.5 7.3 4 9.8 4 13c0 3.9 3.1 7 7 7z"/>
      <path d="M12 20v-2a4 4 0 0 0-4-4H6"/>
      <path d="M12 20v-2a4 4 0 0 1 4-4h2"/>
    </svg>
  `,
  
  // Shield icon for protection and safety
  shield: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  `,
  
  // Sun icon for positivity and energy
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `,
  
  // Cloud icon for calm and peace
  cloud: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  `
};

// Background patterns for mental health theme
const MentalHealthBackgrounds = {
  // Calming gradient pattern
  calmingGradient: `
    linear-gradient(135deg, 
      #667eea 0%, 
      #764ba2 25%, 
      #f093fb 50%, 
      #f5576c 75%, 
      #4facfe 100%
    )
  `,
  
  // Wellness pattern with soft circles
  wellnessPattern: `
    radial-gradient(circle at 10% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 20%),
    radial-gradient(circle at 50% 50%, rgba(240, 147, 251, 0.1) 0%, transparent 30%)
  `,
  
  // Peaceful blue gradient
  peacefulBlue: `
    linear-gradient(135deg, 
      #4facfe 0%, 
      #00f2fe 50%, 
      #4facfe 100%
    )
  `,
  
  // Sunset wellness gradient
  sunsetWellness: `
    linear-gradient(135deg, 
      #ff9a9e 0%, 
      #fecfef 50%, 
      #fecfef 100%
    )
  `
};

export { MentalHealthIcons, MentalHealthBackgrounds };