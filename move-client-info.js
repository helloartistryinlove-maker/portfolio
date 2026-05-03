const fs = require('fs');
const file = 'c:/Users/Dell/Desktop/WebDev/portfolio/src/components/site/footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const clientInfoBlock =             <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", opacity: 0.8, fontFamily: "var(--font-sans, 'Manrope', sans-serif)" }}>
              <span style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#141413" }}>Alison</span>
              <a href="mailto:alisonpinto@gmail.com" style={{ color: "#141413", textDecoration: "none" }}>alisonpinto@gmail.com</a>
              <a href="https://www.AIL.com" target="_blank" rel="noreferrer" style={{ color: "#141413", textDecoration: "none" }}>www.AIL.com</a>
            </div>;

const newClientInfoBlock =             {/* Client Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", opacity: 0.8, fontFamily: "var(--font-sans, 'Manrope', sans-serif)" }}>
              <span style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#141413" }}>Alison</span>
              <a href="mailto:alisonpinto@gmail.com" style={{ color: "#141413", textDecoration: "none" }}>alisonpinto@gmail.com</a>
              <a href="https://www.AIL.com" target="_blank" rel="noreferrer" style={{ color: "#141413", textDecoration: "none" }}>www.AIL.com</a>
            </div>;

// 1. Remove from original location
content = content.replace(clientInfoBlock, "");

// 2. Wrap socials and append
const socialsStart =             {/* Socials */}
            <div className="footer-social-col" aria-label="Social links">;

const newSocialsStart =             {/* Socials & Client Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div className="footer-social-col" aria-label="Social links">;

content = content.replace(socialsStart, newSocialsStart);

const socialsEnd =               </a>
            </div>
          </div>
        </div>;

const newSocialsEnd =               </a>
            </div>

          </div>
          </div>
        </div>;

content = content.replace(socialsEnd, newSocialsEnd);

fs.writeFileSync(file, content);
console.log('Success');
