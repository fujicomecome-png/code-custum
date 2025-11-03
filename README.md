# agentLimited

MakeCode for Minecraft (Education) extension that exposes only two blocks:
- agent move (forward/back/up/down) by N steps
- agent turn (left/right)

How to use
1. Push these files to your GitHub repo (root).
2. Open MakeCode for Minecraft (Education).
3. Add extension: in the Extensions dialog enter `github:<your-user>/<your-repo>` (example: `github:fujicomecome-png/code-custum`).
4. The category `agentLimited` will appear with the two blocks.

Notes / Troubleshooting
- If MakeCode reports dependency or target errors, try replacing `"minecraft": "*"` with `"pxt-minecraft": "*"` in pxt.json.
- If SixDirection or TurnDirection identifiers are not found, check an official Minecraft extension source in your MakeCode instance and adjust those enum references to match the target's API names.
- This extension limits visible blocks but does not prevent users from switching to JavaScript and invoking other global APIs. For stricter control combine this with classroom policy or environment-level restrictions.
