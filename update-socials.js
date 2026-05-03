const fs = require('fs');
const file = 'c:/Users/Dell/Desktop/WebDev/portfolio/src/components/site/footer.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update CSS
content = content.replace(
    '.footer-nav-col,\n        .footer-social-col {\n          display: flex;\n          flex-direction: column;\n          gap: 18px;\n        }',
    '.footer-nav-col {\n          display: flex;\n          flex-direction: column;\n          gap: 18px;\n        }\n\n        .footer-social-col {\n          display: flex;\n          flex-direction: row;\n          gap: 24px;\n        }'
);

content = content.replace(
    '.footer-link,\n        .footer-social-link {\n          font-family: var(--font-sans, "Manrope", sans-serif);\n          font-size: 11px;\n          font-weight: 600;\n          letter-spacing: 0.25em;\n          text-transform: uppercase;\n          color: #141413;\n          opacity: 0.6;\n          text-decoration: none;\n          display: inline-flex;\n          align-items: center;\n          gap: 8px;\n          width: fit-content;\n          transition: opacity 0.3s ease, transform 0.3s ease;\n        }',
    '.footer-link {\n          font-family: var(--font-sans, "Manrope", sans-serif);\n          font-size: 11px;\n          font-weight: 600;\n          letter-spacing: 0.25em;\n          text-transform: uppercase;\n          color: #141413;\n          opacity: 0.6;\n          text-decoration: none;\n          display: inline-flex;\n          align-items: center;\n          width: fit-content;\n          transition: opacity 0.3s ease, transform 0.3s ease;\n        }\n\n        .footer-social-link {\n          color: #141413;\n          opacity: 0.6;\n          display: inline-flex;\n          align-items: center;\n          transition: opacity 0.3s ease, transform 0.3s ease;\n        }'
);

content = content.replace(
    '.footer-link:hover,\n        .footer-social-link:hover {\n          opacity: 1;\n          transform: translateX(6px);\n        }',
    '.footer-link:hover {\n          opacity: 1;\n          transform: translateX(6px);\n        }\n\n        .footer-social-link:hover {\n          opacity: 1;\n          transform: translateY(-4px) scale(1.05);\n        }'
);

// Fallback regex replacement for Windows carriage returns (\r\n) just in case
content = content.replace(
    /\.footer-nav-col,\r?\n\s*\.footer-social-col \{\r?\n\s*display: flex;\r?\n\s*flex-direction: column;\r?\n\s*gap: 18px;\r?\n\s*\}/g,
    '.footer-nav-col {\n          display: flex;\n          flex-direction: column;\n          gap: 18px;\n        }\n\n        .footer-social-col {\n          display: flex;\n          flex-direction: row;\n          gap: 24px;\n        }'
);

content = content.replace(
    /\.footer-link,\r?\n\s*\.footer-social-link \{\r?\n\s*font-family: var\(--font-sans, "Manrope", sans-serif\);\r?\n\s*font-size: 11px;\r?\n\s*font-weight: 600;\r?\n\s*letter-spacing: 0\.25em;\r?\n\s*text-transform: uppercase;\r?\n\s*color: #141413;\r?\n\s*opacity: 0\.6;\r?\n\s*text-decoration: none;\r?\n\s*display: inline-flex;\r?\n\s*align-items: center;\r?\n\s*gap: 8px;\r?\n\s*width: fit-content;\r?\n\s*transition: opacity 0\.3s ease, transform 0\.3s ease;\r?\n\s*\}/g,
    '.footer-link {\n          font-family: var(--font-sans, "Manrope", sans-serif);\n          font-size: 11px;\n          font-weight: 600;\n          letter-spacing: 0.25em;\n          text-transform: uppercase;\n          color: #141413;\n          opacity: 0.6;\n          text-decoration: none;\n          display: inline-flex;\n          align-items: center;\n          width: fit-content;\n          transition: opacity 0.3s ease, transform 0.3s ease;\n        }\n\n        .footer-social-link {\n          color: #141413;\n          opacity: 0.6;\n          display: inline-flex;\n          align-items: center;\n          transition: opacity 0.3s ease, transform 0.3s ease;\n        }'
);

content = content.replace(
    /\.footer-link:hover,\r?\n\s*\.footer-social-link:hover \{\r?\n\s*opacity: 1;\r?\n\s*transform: translateX\(6px\);\r?\n\s*\}/g,
    '.footer-link:hover {\n          opacity: 1;\n          transform: translateX(6px);\n        }\n\n        .footer-social-link:hover {\n          opacity: 1;\n          transform: translateY(-4px) scale(1.05);\n        }'
);


// Update JSX
content = content.replace(/<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1\.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"><\/rect><path d="M16 11\.37A4 4 0 1 1 12\.63 8 4 4 0 0 1 16 11\.37z"><\/path><line x1="17\.5" y1="6\.5" x2="17\.51" y2="6\.5"><\/line><\/svg>\s*Instagram/g, 
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>');

content = content.replace(/<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1\.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11\.5a8\.38 8\.38 0 0 1-\.9 3\.8 8\.5 8\.5 0 0 1-7\.6 4\.7 8\.38 8\.38 0 0 1-3\.8-\.9L3 21l1\.9-5\.7a8\.38 8\.38 0 0 1-\.9-3\.8 8\.5 8\.5 0 0 1 4\.7-7\.6 8\.38 8\.38 0 0 1 3\.8-\.9h\.5a8\.48 8\.48 0 0 1 8 8v\.5z"><\/path><\/svg>\s*WhatsApp/g, 
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>');

content = content.replace(/<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1\.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1\.1 0 2 \.9 2 2v12c0 1\.1-\.9 2-2 2H4c-1\.1 0-2-\.9-2-2V6c0-1\.1\.9-2 2-2z"><\/path><polyline points="22,6 12,13 2,6"><\/polyline><\/svg>\s*Email Studio/g, 
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>');

fs.writeFileSync(file, content);
console.log("Success");
