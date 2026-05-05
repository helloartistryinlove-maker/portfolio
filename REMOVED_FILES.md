### Removed Files Log

#### move-client-info.js
- Type: One-time developer script
- Reason: Not used in runtime, build, or scripts
- Notes: Contained hardcoded local path; not portable

#### gallery.json
- Type: Legacy static data
- Reason: No references in codebase; replaced by dynamic ImageKit usage
- Notes: Contained image URLs but not used anywhere; file was not present at deletion time (possibly already renamed or removed). Check `galler-legacyy.json` if you expect a local backup.

---

Removal performed: Deleted `move-client-info.js`. `gallery.json` was not found in repository root during cleanup and therefore was not deleted by this operation; please confirm if you want `galler-legacyy.json` removed or renamed.

Timestamp: 2026-05-06
