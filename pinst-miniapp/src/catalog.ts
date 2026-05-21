export interface Pack {
  id: string
  name: string
  image?: string
  prompt?: string
  photoMode: 'single' | 'couple'
  preset: { id: string; name: string }
}

export interface Section {
  title: string
  packs: Pack[]
}

export const SECTIONS: Section[] = [
  {
    title: '⚡ Новые',
    packs: [
        {
            id: 'fishes',
            name: 'Глаза рыбки',
            image:  'https://i.imgur.com/sPM7hhF.png',
            prompt: 'TASK: Vertical collage of two close-up eye photos with pencil-drawn fish — each eye is the fish\'s eye\n' +
                '\n' +
                '====================\n' +
                'INPUT\n' +
                '====================\n' +
                '\n' +
                'One photo showing TWO EYES of a couple (both eyes in one image)\n' +
                '\n' +
                '====================\n' +
                'REFERENCE STYLE TO MATCH EXACTLY\n' +
                '====================\n' +
                '\n' +
                'The fish must look like a REAL PENCIL SKETCH drawn directly on the person\'s skin:\n' +
                '- Very thin, light, delicate pencil strokes\n' +
                '- Lines are semi-transparent — skin texture shows THROUGH the lines\n' +
                '- Strokes have natural pencil pressure variation (some lines fainter, some darker)\n' +
                '- Slightly sketchy and organic — not a clean digital vector, not painted, not filled\n' +
                '- Fine hand-drawn hatching for fins and tail — airy, wispy, flowing\n' +
                '- The drawing sits ON the skin like real graphite — looks hand-sketched over a phone photo\n' +
                '\n' +
                'The fish is elegant and flowing: long wispy fins, a flowing tail, fine thin lines —\n' +
                'a delicate fish, drawn airy and light, body curving organically around the eye.\n' +
                '\n' +
                '====================\n' +
                'FISH COLOR — MATCH THE IRIS (CRITICAL)\n' +
                '====================\n' +
                '\n' +
                'The fish line color = the EXACT color of THAT person\'s iris.\n' +
                '\n' +
                '- If the eye is gray-green / blue-gray → fish drawn in soft silvery gray-green pencil\n' +
                '- If the eye is warm brown / hazel → fish drawn in warm brown pencil\n' +
                '- Whatever the precise iris shade is → the fish lines are that same shade\n' +
                '\n' +
                'Top fish matches the top eye\'s iris. Bottom fish matches the bottom eye\'s iris.\n' +
                'The fish and the eye it surrounds share the same color — they belong together.\n' +
                '\n' +
                '====================\n' +
                'THE CORE RULE — EYE IS THE FISH\'S EYE\n' +
                '====================\n' +
                '\n' +
                'In each image there is ONLY ONE EYE: the real human eye.\n' +
                'The human eye IS the fish\'s eye. The fish has NO eye of its own.\n' +
                '\n' +
                '- Do NOT draw a fish eye — no circle, no dot, nothing\n' +
                '- The fish HEAD wraps around the human eye\n' +
                '- The fish MOUTH sits just beside the eye\'s inner corner\n' +
                '- The fish BODY, fins and tail flow AWAY from the eye, across the skin, toward the temple\n' +
                '- The human eye is at the HEAD of the fish — never the middle of the body\n' +
                '- Fit each fish individually to its own eye — it must not slide off\n' +
                '\n' +
                '====================\n' +
                'PART 1: LOCK IDENTITY (STUDY EACH EYE 30 SEC)\n' +
                '====================\n' +
                '\n' +
                'For EACH person, lock these EXACT features — copy, do not approximate:\n' +
                '\n' +
                'EYE:\n' +
                '- Iris color: EXACT precise shade with all variations\n' +
                '- Iris pattern: EXACT radial fibers, specks, rings\n' +
                '- Pupil: EXACT size and shape\n' +
                '- Eye shape / разрез: EXACT contour, inner and outer corner shape and angle\n' +
                '- Sclera: exact tone, any visible veins\n' +
                '\n' +
                'EYELASHES:\n' +
                '- Upper and lower: EXACT length, curl, density, direction, color — real individual lashes\n' +
                '\n' +
                'EYEBROW:\n' +
                '- EXACT color, thickness, arch, density, hair growth direction, stray hairs\n' +
                '\n' +
                'SKIN:\n' +
                '- EXACT tone and undertone\n' +
                '- Real texture: visible pores, fine lines, natural unevenness — keep it real\n' +
                '- Eyelid folds, under-eye area, creases — EXACT\n' +
                '\n' +
                'DISTINCTIVE MARKS (do not miss any):\n' +
                '- EVERY mole, EVERY freckle, EVERY scar/spot — exact location and size\n' +
                '\n' +
                'HAIR NEAR EYE:\n' +
                '- EXACT color with undertones, texture, individual strands, baby hairs\n' +
                '\n' +
                'IDENTITY LOCKED. Every mole, freckle, lash and brow hair is immutable.\n' +
                '\n' +
                '====================\n' +
                'PRE-GENERATION TEST\n' +
                '====================\n' +
                '\n' +
                'Before drawing, answer for EACH person:\n' +
                '1. EXACT iris color? (precise shade — this is also the fish color)\n' +
                '2. EXACT eye shape / разрез and corners?\n' +
                '3. EXACT eyelashes (length, curl, density)?\n' +
                '4. EXACT eyebrow (color, thickness, arch)?\n' +
                '5. EXACT skin tone, undertone, texture?\n' +
                '6. EXACT hair color with undertones?\n' +
                '7. How many moles/freckles and the EXACT location of each?\n' +
                '\n' +
                'If any answer is vague → study the input again.\n' +
                '\n' +
                '====================\n' +
                'DRAWING ORDER\n' +
                '====================\n' +
                '\n' +
                '1. Locate the human eye — this is the fish\'s eye, fixed in place.\n' +
                '2. Draw the fish HEAD outline wrapping around the human eye, thin light pencil.\n' +
                '3. Draw the small MOUTH just past the eye\'s inner corner.\n' +
                '4. Draw 1-2 faint gill lines behind the head.\n' +
                '5. Draw the BODY curving away from the eye toward the temple.\n' +
                '6. Add airy wispy fins and a long flowing tail with fine hatching.\n' +
                '7. Scatter a few tiny bubbles (thin faint circles) around.\n' +
                '8. NO eye is drawn on the fish — the human eye is the only eye.\n' +
                '\n' +
                'All lines: thin, light, semi-transparent pencil, matching the iris color.\n' +
                '\n' +
                '====================\n' +
                'PRESERVATION RULE\n' +
                '====================\n' +
                '\n' +
                'The fish is a light pencil drawing layered ON TOP of the skin.\n' +
                'It does NOT cover, hide, blur, or change ANY facial feature.\n' +
                'Eye, lashes, brows, skin texture, every pore, every mole and freckle, hair —\n' +
                'all stay 100% real and identical to the input. The photo underneath stays a\n' +
                'real, unretouched phone photo.\n' +
                '\n' +
                '====================\n' +
                'VERIFICATION — ALL MUST BE YES\n' +
                '====================\n' +
                '\n' +
                'STYLE & CONCEPT:\n' +
                '☐ Fish looks like a real light pencil sketch on skin (thin, semi-transparent)?\n' +
                '☐ Skin texture shows through the fish lines?\n' +
                '☐ Fish lines NOT filled or painted — just delicate strokes?\n' +
                '☐ Fish color matches that eye\'s exact iris color?\n' +
                '☐ The fish has NO drawn eye (no circle, no dot)?\n' +
                '☐ The human eye is the only eye, inside the fish\'s head?\n' +
                '☐ Fish mouth beside the eye\'s inner corner, body trailing to the temple?\n' +
                '☐ Each fish individually fitted to its own eye (not slid off, not body-centered)?\n' +
                '\n' +
                'PERSON 1 (top) — identity:\n' +
                '☐ Iris color and pattern EXACT?\n' +
                '☐ Eye shape / разрез and corners EXACT?\n' +
                '☐ Eyelashes EXACT (real, individual)?\n' +
                '☐ Eyebrow EXACT?\n' +
                '☐ Skin tone, undertone, real texture (pores) EXACT?\n' +
                '☐ EVERY mole and freckle preserved in exact location?\n' +
                '☐ Hair color and texture EXACT?\n' +
                '☐ Would person 1 recognize themselves instantly?\n' +
                '\n' +
                'PERSON 2 (bottom) — identity:\n' +
                '☐ Iris color and pattern EXACT?\n' +
                '☐ Eye shape / разрез and corners EXACT?\n' +
                '☐ Eyelashes EXACT (real, individual)?\n' +
                '☐ Eyebrow EXACT?\n' +
                '☐ Skin tone, undertone, real texture (pores) EXACT?\n' +
                '☐ EVERY mole and freckle preserved in exact location?\n' +
                '☐ Hair color and texture EXACT?\n' +
                '☐ Would person 2 recognize themselves instantly?\n' +
                '\n' +
                'COMPOSITION:\n' +
                '☐ Two photos stacked vertically, edge to edge?\n' +
                '☐ Plain collage, nothing extra added?\n' +
                '\n' +
                'IF ANY = NO → regenerate.\n' +
                '\n' +
                '====================\n' +
                'CRITICAL RULES\n' +
                '====================\n' +
                '\n' +
                '1. Fish = real light pencil sketch on skin — thin, semi-transparent, skin shows through\n' +
                '2. Fish color = EXACT iris color of that eye (top fish ↔ top eye, bottom fish ↔ bottom eye)\n' +
                '3. The fish has NO eye — the human eye is the only eye, inside the fish\'s head\n' +
                '4. Human eye at the HEAD of the fish, never the middle of the body\n' +
                '5. Each fish fitted individually to its own eye — must not slide off\n' +
                '6. MAXIMUM identity preservation — iris, разрез, lashes, brows, skin, hair, every mole and freckle\n' +
                '7. Real unretouched photo underneath — visible pores, real lashes and brows\n' +
                '8. Elegant flowing fish — airy wispy fins, long flowing tail, fine hatching\n' +
                '9. Plain vertical collage — two photos stacked, nothing added\n' +
                '\n' +
                '====================\n' +
                'OUTPUT\n' +
                '====================\n' +
                '\n' +
                'Vertical collage of two realistic close-up eye photos (top and bottom), edge to edge,\n' +
                'with natural skin texture, visible pores, real individual lashes and brows. Each\n' +
                'person\'s real eye becomes an elegant fish drawn as a delicate, light pencil sketch\n' +
                'directly on the skin — thin semi-transparent strokes with natural pencil pressure, the\n' +
                'skin texture showing through, airy wispy fins and a long flowing tail with fine\n' +
                'hatching, a few tiny bubbles. The fish line color exactly matches that eye\'s iris color\n' +
                '(top fish matches top eye, bottom fish matches bottom eye). The fish has no eye of its\n' +
                'own — the human eye is the fish\'s eye, sitting inside the fish\'s head with the mouth\n' +
                'beside the inner corner and the body flowing toward the temple. Looks like a real hand\n' +
                'pencil sketch over a phone photo. Maximum identity preservation: iris color and pattern,\n' +
                'eye shape/разрез, eyelashes, eyebrows, skin tone and texture, hair, and every mole and\n' +
                'freckle — all identical to the input.',
            photoMode: 'single',
            preset: { id: 'fishes', name: 'Студийный' },
        },
        {
            id: 'hearts',
            name: 'Коллаж с сердцами',
            image:  'https://i.imgur.com/bdo93fI.jpeg',
            prompt: 'CRITICAL: IDENTITY PRESERVATION\n' +
                '\n' +
                'Reference Image Analysis:\n' +
                '- This image is the ABSOLUTE SOURCE OF TRUTH for the person\'s appearance\n' +
                '- Study and memorize EXACT facial features before generation:\n' +
                '  * Precise face shape and proportions\n' +
                '  * Exact eye shape, size, color, iris patterns, eyelid structure\n' +
                '  * Specific nose bridge height, nostril shape, tip angle\n' +
                '  * Exact lip shape, thickness, cupid\'s bow definition\n' +
                '  * Precise cheekbone structure and position\n' +
                '  * Exact jawline and chin shape\n' +
                '  * Specific eyebrow shape, thickness, arch\n' +
                '  * Exact distance ratios between features (eye spacing, nose-to-lip distance)\n' +
                '  * Skin tone, texture, any distinctive marks or features\n' +
                '  * Hair color, texture, hairline (if changing hairstyle, keep natural growth patterns)\n' +
                '\n' +
                'Task: YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON. This person is your ONLY reference for facial features and identity. Create a vertical collage of THREE separate selfie photos stacked vertically in a single image, featuring THE EXACT PERSON from the input image. \n' +
                '\n' +
                'CRITICAL: The face, features, and identity MUST match the input image perfectly. Do not create a generic person - use the EXACT person provided.\n' +
                '\n' +
                'Layout: three equal-height horizontal sections, no borders between them, seamless vertical stack. Setting: modern bedroom with light beige built-in wardrobes, warm ceiling lighting, bed visible in background (same background for all three photos).\n' +
                '\n' +
                'Photo 1 (TOP): Close-up selfie of THE PERSON FROM INPUT IMAGE, their right hand index finger touching/pressing lips in "shh" gesture, looking directly at camera with soft neutral expression, long dark hair flowing down. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).\n' +
                '\n' +
                'Photo 2 (MIDDLE): Close-up selfie of THE SAME PERSON FROM INPUT IMAGE, head tilted slightly to the right, right hand gently touching cheek/face area, soft gentle smile, relaxed pose. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).\n' +
                '\n' +
                'Photo 3 (BOTTOM): Close-up selfie of THE SAME PERSON FROM INPUT IMAGE, both hands near face in thoughtful/cute pose, fingers near chin and cheek area, gentle expression with slight smile or contemplative look. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).\n' +
                '\n' +
                'HEARTS PLACEMENT - CRITICAL:\n' +
                '- TOP photo (Photo 1): YES - pink gradient hearts floating above head (5-7 hearts)\n' +
                '- MIDDLE photo (Photo 2): YES - pink gradient hearts floating above head (5-7 hearts)\n' +
                '- BOTTOM photo (Photo 3): YES - pink gradient hearts floating above head (5-7 hearts)\n' +
                'ALL THREE PHOTOS MUST HAVE HEARTS!\n' +
                '\n' +
                'All three photos: Pink/rose lace camisole top with thin straps, same outfit in all frames. Warm soft lighting, selfie camera angle (slightly from above), intimate close-up framing showing face and upper shoulders. The person\'s natural hair from input image, styled long and flowing. Authentic smartphone selfie quality and perspective.\n' +
                '\n' +
                'MANDATORY CONSTRAINTS:\n' +
                '- THE PERSON IN ALL THREE PHOTOS MUST BE THE EXACT SAME PERSON FROM THE INPUT IMAGE\n' +
                '- Study the input image facial features BEFORE generating anything\n' +
                '- Zero tolerance for feature changes from input image - every facial detail must match\n' +
                '- Do NOT create a different person or generic face\n' +
                '- Do NOT idealize, beautify, or "fix" any features from the input\n' +
                '- Do NOT blend with other faces or use generic features\n' +
                '- The person must be INSTANTLY recognizable from the input image in all three photos\n' +
                '- ALL THREE PHOTOS must have pink gradient hearts floating above the head\n' +
                '- Hair color and texture must match the input image (can be styled long for this shoot)\n' +
                '\n' +
                'IDENTITY VERIFICATION CHECKLIST:\n' +
                'Before finalizing, verify:\n' +
                '✓ Does this person look EXACTLY like the person in the input image?\n' +
                '✓ Would someone who knows the input person recognize them immediately?\n' +
                '✓ Are the eye shape, color, and characteristics from input image preserved?\n' +
                '✓ Is the nose from input image identical in all dimensions?\n' +
                '✓ Do the lips match the input image precisely?\n' +
                '✓ Are facial proportions from input image preserved in all three photos?\n' +
                '✓ Are distinctive features from input visible in all frames?\n' +
                '✓ Is this the SAME person across all three photos?\n' +
                '✓ Do ALL THREE photos have hearts floating above the head?\n' +
                '\n' +
                'ALLOWED VARIATIONS FROM INPUT IMAGE:\n' +
                '- Hand positions exactly as described for each photo\n' +
                '- Head tilt and angle specific to each frame\n' +
                '- Expression variations as specified (neutral, gentle smile, contemplative)\n' +
                '- Hair can be styled longer if needed, but must maintain input\'s color and texture\n' +
                '- Clothing: pink lace camisole (different from input outfit)\n' +
                '- Setting: bedroom background (different from input setting)\n' +
                '- Hearts overlay on ALL THREE photos\n' +
                '\n' +
                'WHAT MUST STAY IDENTICAL TO INPUT:\n' +
                '- Face shape and all facial features\n' +
                '- Skin tone\n' +
                '- Eye shape, color, characteristics\n' +
                '- Nose structure\n' +
                '- Lip shape\n' +
                '- Facial proportions and feature spacing\n' +
                '- Any distinctive marks or features\n' +
                '- Overall identity and recognizability\n' +
                '\n' +
                'OUTPUT REQUIREMENTS:\n' +
                '- Single vertical image containing three stacked photos of THE PERSON FROM INPUT\n' +
                '- Each section equal height, seamless transitions\n' +
                '- Photorealistic quality matching modern smartphone camera\n' +
                '- Natural skin texture with soft warm indoor lighting\n' +
                '- Authentic selfie perspective in all three frames\n' +
                '- Consistent background across all photos\n' +
                '- Pink lace camisole visible in all frames\n' +
                '- Hearts in ALL THREE sections: pink gradient, cartoon/decorative style, floating above head (5-7 hearts of varying sizes per photo)\n' +
                '- TOP photo: pink gradient hearts above head\n' +
                '- MIDDLE photo: pink gradient hearts above head\n' +
                '- BOTTOM photo: pink gradient hearts above head\n' +
                '- Sharp focus on face in all photos\n' +
                '- Warm color temperature (2800-3200K)\n' +
                '- No filters - natural authentic look\n' +
                '\n' +
                'ERROR PREVENTION:\n' +
                '- FIRST: Study the input image facial features thoroughly\n' +
                '- THEN: Generate all three photos featuring that EXACT person\n' +
                '- If uncertain about ANY facial feature - refer back to input image\n' +
                '- The same person from input must appear in all three photos with zero variation in identity\n' +
                '- When in doubt about features, choose accuracy to input over artistic liberty\n' +
                '- Preserve imperfections from input - they define identity\n' +
                '- Hearts are graphic overlay elements in ALL THREE photos\n' +
                '- Maintain exact outfit (pink lace camisole) across all three frames\n' +
                '- CONFIRM HEARTS PLACEMENT: Top = YES, Middle = YES, Bottom = YES (all three have 5-7 pink gradient hearts)',
            photoMode: 'single',
            preset: { id: 'unstaged', name: 'Живая любовь' },
        },
        {
            id: 'studio',
            image: 'https://i.imgur.com/qfuBxSE.jpeg',
            prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
                '\n' +
                'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
                '\n' +
                'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
                '\n' +
                'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
                'Extract and lock in these features from the input image:\n' +
                '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
                '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
                '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
                '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
                '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
                '6. CHEEKBONES: Height, prominence, width\n' +
                '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
                '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
                '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
                '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
                '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
                '\n' +
                'LOCK THESE IN. DO NOT DEVIATE.\n' +
                '\n' +
                'Task: Create a romantic lifestyle photograph of THIS EXACT PERSON (from input image) in a modern apartment setting surrounded by flowers.\n' +
                '\n' +
                'SCENE & SETTING:\n' +
                '- Location: Modern luxury apartment/penthouse kitchen area\n' +
                '- Time: Evening/night (dark outside visible through windows)\n' +
                '- Flooring: Dark hardwood floors\n' +
                '- Background elements: \n' +
                '  * Contemporary dark wood kitchen cabinets\n' +
                '  * Large floor-to-ceiling windows showing night cityscape/darkness outside\n' +
                '  * Modern minimalist interior design\n' +
                '  * Soft ambient indoor lighting\n' +
                '\n' +
                'FLOWERS - CRITICAL ELEMENT:\n' +
                '- Multiple large arrangements of RED ROSES throughout the scene\n' +
                '- Subject holding: Large wicker basket filled with vibrant RED TULIPS (60-80 tulips, tightly arranged)\n' +
                '- Additional arrangements visible:\n' +
                '  * Large bouquet of red roses in glass vase (left side)\n' +
                '  * Multiple wicker baskets with red roses positioned around the space\n' +
                '  * At least 3-4 separate flower arrangements visible in frame\n' +
                '- Flowers: fresh, vibrant, luxurious abundance\n' +
                '- Creates romantic Valentine\'s Day / special occasion atmosphere\n' +
                '\n' +
                'SUBJECT POSITION & POSE:\n' +
                '- Subject crouching/squatting on the floor\n' +
                '- Position: centered in frame, knees bent, sitting on heels\n' +
                '- Body turned slightly toward camera (3/4 angle)\n' +
                '- Holding large wicker basket of red tulips with both hands\n' +
                '- Basket positioned in front of torso\n' +
                '- Barefoot on dark hardwood floor\n' +
                '- Relaxed, natural, intimate pose\n' +
                '\n' +
                'CLOTHING:\n' +
                '- White oversized button-up shirt (men\'s style shirt worn as dress)\n' +
                '- Shirt appears silky or satin material\n' +
                '- Sleeves rolled or pushed up to mid-forearm\n' +
                '- Shirt worn loosely, casually elegant\n' +
                '- Legs visible (shirt worn short, revealing thighs)\n' +
                '- Minimalist, effortlessly chic styling\n' +
                '\n' +
                'HAIR - FROM INPUT IMAGE:\n' +
                '- Use the EXACT hair color from the input image (do not change)\n' +
                '- If input has blonde hair → keep blonde\n' +
                '- If input has dark hair → keep dark\n' +
                '- If input has brown/other hair → keep that exact color\n' +
                '- Style: Long, tousled, naturally styled with volume\n' +
                '- Hair appears slightly messy/bedhead style (authentic, lived-in look)\n' +
                '- Some strands falling around face\n' +
                '- Swept to one side with natural movement\n' +
                '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
                '\n' +
                'EXPRESSION & MOOD:\n' +
                '- Soft, intimate gaze toward camera\n' +
                '- Gentle, subtle smile or serene expression\n' +
                '- Romantic, vulnerable, authentic emotion\n' +
                '- Eyes: direct contact with camera, warm and inviting\n' +
                '- Overall mood: intimate, romantic, special moment captured\n' +
                '\n' +
                'LIGHTING:\n' +
                '- Indoor ambient lighting (warm tones)\n' +
                '- Soft, natural-looking illumination\n' +
                '- Not harsh studio lights - appears like home lighting\n' +
                '- Warm glow creating intimate atmosphere\n' +
                '- Some shadows for depth and realism\n' +
                '- Evening/romantic lighting quality\n' +
                '\n' +
                'CAMERA & TECHNICAL:\n' +
                '- Shot appears taken with high-quality camera or professional smartphone\n' +
                '- Slight film grain or natural texture (not overly polished)\n' +
                '- Authentic, lifestyle photography aesthetic\n' +
                '- Not overly staged - feels candid and real\n' +
                '- Portrait orientation (vertical frame)\n' +
                '- Medium-close composition showing full upper body and environment\n' +
                '\n' +
                'MANDATORY IDENTITY CONSTRAINTS:\n' +
                '✓ This is the SAME PERSON, not a lookalike\n' +
                '✓ Use ZERO generic features - every feature comes from input image\n' +
                '✓ Do NOT blend or average with other faces\n' +
                '✓ Do NOT "beautify" or "fix" features\n' +
                '✓ Do NOT make symmetrical if input is asymmetric\n' +
                '✓ Do NOT change ethnic characteristics\n' +
                '✓ Do NOT alter bone structure\n' +
                '✓ Do NOT modify facial proportions\n' +
                '✓ Hair color MUST match input (this is non-negotiable)\n' +
                '✓ Skin tone MUST match input exactly\n' +
                '✓ Every measurement and ratio must be preserved\n' +
                '\n' +
                'VERIFICATION PROTOCOL:\n' +
                'Before finalizing, confirm:\n' +
                '1. Could their family recognize them instantly? (YES required)\n' +
                '2. Eye shape, color, and characteristics EXACTLY match input? (YES required)\n' +
                '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
                '4. Lip shape and fullness PRECISE match to input? (YES required)\n' +
                '5. Face shape and proportions EXACT match? (YES required)\n' +
                '6. Hair color SAME as input? (YES required)\n' +
                '7. Skin tone IDENTICAL to input? (YES required)\n' +
                '8. All unique features preserved? (YES required)\n' +
                '9. Is this THE SAME PERSON? (MUST be YES)\n' +
                '10. Would they recognize this photo as themselves? (YES required)\n' +
                '\n' +
                'If ANY answer is NO → RESTART and copy features more precisely.\n' +
                '\n' +
                'WHAT CHANGES vs INPUT:\n' +
                '- Setting: modern apartment with flowers\n' +
                '- Clothing: white oversized shirt\n' +
                '- Pose: crouching/squatting position holding basket\n' +
                '- Props: multiple flower arrangements, wicker baskets\n' +
                '- Lighting: intimate evening home lighting\n' +
                '- Hair styling: tousled, natural (but COLOR stays same as input)\n' +
                '- Context: romantic flower surprise scenario\n' +
                '\n' +
                'WHAT NEVER CHANGES:\n' +
                '- Face structure (bone structure, proportions)\n' +
                '- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)\n' +
                '- Skin tone and undertone\n' +
                '- Hair color (CRITICAL - must match input exactly)\n' +
                '- Ethnic characteristics\n' +
                '- Eye color and characteristics\n' +
                '- Natural facial asymmetries\n' +
                '- Unique identifying features\n' +
                '- The fundamental DNA and identity of the face\n' +
                '\n' +
                'OUTPUT REQUIREMENTS:\n' +
                '- High-quality lifestyle photography (8K resolution)\n' +
                '- Romantic, intimate atmosphere\n' +
                '- Warm color grading with natural tones\n' +
                '- Vibrant red flowers as key visual element\n' +
                '- Dark moody background (evening setting)\n' +
                '- Natural skin texture visible\n' +
                '- Authentic, candid feeling (not overly staged)\n' +
                '- Portrait orientation\n' +
                '- Focus sharp on subject\'s face\n' +
                '- Slight depth of field with background softly blurred\n' +
                '- The subject should be INSTANTLY recognizable as the person from input\n' +
                '\n' +
                'CRITICAL REMINDERS:\n' +
                '- You are photographing an EXISTING person in a romantic scenario, not creating a new person\n' +
                '- Every facial feature is a direct copy from the input - no modifications\n' +
                '- "Similar" is failure - only "identical" is acceptable\n' +
                '- Hair COLOR from input is LOCKED - styling can change but color cannot\n' +
                '- This is a lifestyle/intimate photo, not a professional studio shoot\n' +
                '- Think of this as: "Same person, romantic surprise moment at home"\n' +
                '\n' +
                'ERROR PREVENTION:\n' +
                '- Reference the input image constantly during generation\n' +
                '- Copy features exactly, do not approximate\n' +
                '- When uncertain → copy more precisely from input\n' +
                '- Asymmetries and natural features are required - they define identity\n' +
                '- Natural lighting should enhance, not excuse feature changes\n' +
                '- The romantic setting should not distract from identity accuracy',
            name: 'Розы в квартире',
            photoMode: 'single',
            preset: { id: 'studio', name: 'Студийный' },
        },
      {
        id: 'light',
        name: 'Нежный свет',
        image: 'https://i.imgur.com/V77jCcy.jpeg',
        prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
            '\n' +
            'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
            '\n' +
            'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
            '\n' +
            'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
            'Extract and lock in these features from the input image:\n' +
            '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
            '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
            '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
            '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
            '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
            '6. CHEEKBONES: Height, prominence, width\n' +
            '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
            '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
            '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
            '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
            '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
            '\n' +
            'LOCK THESE IN. DO NOT DEVIATE.\n' +
            '\n' +
            'Task: Create a cinematic portrait of THIS EXACT PERSON (from input image) in a new setting and pose.\n' +
            '\n' +
            'Setting: Professional fashion photography studio with neutral background.\n' +
            'Angle: 3/4 side profile, face turned slightly to the right.\n' +
            '\n' +
            'LIGHTING SPECIFICATION:\n' +
            '- Single horizontal beam of warm golden sunlight crosses the face at EYE LEVEL\n' +
            '- The beam illuminates BOTH EYES, creating golden glow in the irises\n' +
            '- Light also catches upper cheekbone and nose bridge\n' +
            '- Source: appears like sunlight through horizontal window blinds or gap\n' +
            '- Background: soft gray-blue, slightly out of focus\n' +
            '- Overall: dramatic but natural, cinematic quality\n' +
            '\n' +
            'HAIR - FROM INPUT IMAGE:\n' +
            '- Use the EXACT hair color from the input image (do not invent new color)\n' +
            '- If input has blonde hair → keep blonde\n' +
            '- If input has dark hair → keep dark  \n' +
            '- If input has red/auburn hair → keep red/auburn\n' +
            '- Only variation allowed: styling (can be worn long and straight with bangs IF it suits the input person\'s natural hair texture)\n' +
            '- But COLOR must match input exactly\n' +
            '\n' +
            'CLOTHING & STYLING:\n' +
            '- Simple black tank top with thin straps\n' +
            '- Small gold hoop earrings\n' +
            '- Natural makeup that enhances without changing features\n' +
            '\n' +
            'Expression: Serene, contemplative, eyes looking slightly upward toward the light source, lips gently parted.\n' +
            '\n' +
            'MANDATORY IDENTITY CONSTRAINTS:\n' +
            '✓ This is the SAME PERSON, not a lookalike\n' +
            '✓ Use ZERO generic features - every feature comes from input image\n' +
            '✓ Do NOT blend or average with other faces\n' +
            '✓ Do NOT "beautify" or "fix" features\n' +
            '✓ Do NOT make symmetrical if input is asymmetric\n' +
            '✓ Do NOT change ethnic characteristics\n' +
            '✓ Do NOT alter bone structure\n' +
            '✓ Do NOT modify facial proportions\n' +
            '✓ Hair color MUST match input (this is non-negotiable)\n' +
            '✓ Skin tone MUST match input exactly\n' +
            '✓ Every measurement and ratio must be preserved\n' +
            '\n' +
            'VERIFICATION PROTOCOL:\n' +
            'Before finalizing, confirm:\n' +
            '1. Could their mother recognize them instantly? (YES required)\n' +
            '2. Eye shape EXACTLY matches input? (YES required)\n' +
            '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
            '4. Lip shape PRECISE match to input? (YES required)\n' +
            '5. Face shape and proportions EXACT match? (YES required)\n' +
            '6. Hair color SAME as input? (YES required)\n' +
            '7. Skin tone IDENTICAL to input? (YES required)\n' +
            '8. All unique features (moles, asymmetries) preserved? (YES required)\n' +
            '9. Would face recognition AI identify as same person? (YES required)\n' +
            '10. Is this THE SAME PERSON or just similar? (MUST be SAME)\n' +
            '\n' +
            'If ANY answer is NO or "similar but not exact" → RESTART and copy features more precisely.\n' +
            '\n' +
            'WHAT CHANGES vs INPUT:\n' +
            '- Pose/angle: 3/4 profile instead of input angle\n' +
            '- Lighting: dramatic golden beam (different from input lighting)\n' +
            '- Background: neutral studio (different from input background)\n' +
            '- Clothing: black tank top (different from input outfit)\n' +
            '- Hair styling: can be styled long with bangs (but COLOR stays same as input)\n' +
            '- Expression: serene upward gaze (different from input expression)\n' +
            '\n' +
            'WHAT NEVER CHANGES:\n' +
            '- Face structure (bone structure, proportions)\n' +
            '- Every individual facial feature (eyes, nose, lips, etc.)\n' +
            '- Skin tone\n' +
            '- Hair color (CRITICAL - must match input)\n' +
            '- Ethnic characteristics\n' +
            '- Unique identifying features\n' +
            '- The fundamental DNA and identity of the face\n' +
            '\n' +
            'OUTPUT REQUIREMENTS:\n' +
            '- 8K photorealistic quality\n' +
            '- Professional fashion/editorial photography\n' +
            '- Horizontal golden light beam at eye level, illuminating the eyes\n' +
            '- Sharp focus on face, especially eyes\n' +
            '- Natural skin texture preserved\n' +
            '- Cinematic warm color grading\n' +
            '- 85mm lens equivalent, f/1.8-2.0\n' +
            '- Soft bokeh background\n' +
            '- The subject should be INSTANTLY recognizable as the person from input\n' +
            '\n' +
            'CRITICAL REMINDERS:\n' +
            '- You are photographing an EXISTING person in a new setting, not creating a new person\n' +
            '- Every facial feature is a direct copy from the input - no modifications\n' +
            '- "Similar" is failure - only "identical" is acceptable\n' +
            '- Hair color from input is LOCKED - do not change it\n' +
            '- Lighting and styling can change, but the face underneath cannot\n' +
            '- Think of this as: "Same person, different photoshoot"\n' +
            '\n' +
            'ERROR PREVENTION:\n' +
            '- Reference the input image constantly during generation\n' +
            '- Copy features exactly, do not approximate\n' +
            '- When uncertain → copy more precisely from input\n' +
            '- Asymmetries and imperfections are required - they define identity\n' +
            '- The light should enhance visibility, not excuse feature changes',
        photoMode: 'single',
        preset: { id: 'roses', name: 'В объятиях роз' },
      },
      {
        id: 'golden',
        name: 'Золотой час',
        image: 'https://i.imgur.com/WVu8odn.jpeg',
        prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
            '\n' +
            'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
            '\n' +
            'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
            '\n' +
            'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
            'Extract and lock in these features from the input image:\n' +
            '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
            '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
            '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
            '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
            '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
            '6. CHEEKBONES: Height, prominence, width\n' +
            '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
            '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
            '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
            '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
            '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
            '\n' +
            'LOCK THESE IN. DO NOT DEVIATE.\n' +
            '\n' +
            'Task: Create a professional fashion/beauty portrait of THIS EXACT PERSON (from input image) in a studio setting.\n' +
            '\n' +
            'COMPOSITION:\n' +
            '- Front-facing portrait with head slightly tilted to the subject\'s left\n' +
            '- Upper body visible (shoulders and torso in frame)\n' +
            '- Subject positioned centrally\n' +
            '- Camera angle: straight on, eye level\n' +
            '- 3/4 view with face turned slightly toward camera\n' +
            '\n' +
            'BACKGROUND:\n' +
            '- Deep rich burgundy/maroon red color (solid, uniform)\n' +
            '- Professional studio backdrop\n' +
            '- No texture or patterns, just clean solid color\n' +
            '- Creates dramatic contrast with subject\n' +
            '\n' +
            'LIGHTING:\n' +
            '- Professional studio lighting setup\n' +
            '- Main key light from front-left, creating soft directional light\n' +
            '- Subtle shadow on right side of face for dimension\n' +
            '- Catchlights visible in eyes\n' +
            '- Overall: soft, flattering, high-fashion editorial lighting\n' +
            '- Smooth even skin illumination\n' +
            '- No harsh shadows, but defined contours\n' +
            '\n' +
            'HAIR - FROM INPUT IMAGE:\n' +
            '- Use the EXACT hair color from the input image (do not change)\n' +
            '- If input has blonde hair → keep blonde\n' +
            '- If input has dark hair → keep dark\n' +
            '- If input has red/brown hair → keep that exact shade\n' +
            '- Style: Long, voluminous, flowing hair with natural wave and movement\n' +
            '- Hair swept back and to the side with volume at crown\n' +
            '- Some strands falling naturally around face and shoulders\n' +
            '- Texture: soft, silky, with natural movement and body\n' +
            '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
            '\n' +
            'CLOTHING:\n' +
            '- Black sleeveless high-neck top/turtleneck\n' +
            '- Simple, elegant, minimalist\n' +
            '- Allows focus to remain on face\n' +
            '- Professional fashion styling\n' +
            '\n' +
            'MAKEUP & STYLING:\n' +
            '- Professional editorial makeup\n' +
            '- Defined eyes with neutral/bronze eyeshadow tones\n' +
            '- Well-defined eyebrows (matching input person\'s natural brow shape)\n' +
            '- Natural-looking lashes or subtle enhancement\n' +
            '- Lips: natural nude/pink tone with slight gloss\n' +
            '- Skin: flawless but natural-looking finish\n' +
            '- Overall look: polished, sophisticated, high-fashion editorial\n' +
            '\n' +
            'EXPRESSION & POSE:\n' +
            '- Direct eye contact with camera\n' +
            '- Confident, strong, editorial gaze\n' +
            '- Lips slightly parted in neutral/sultry expression\n' +
            '- Neck elongated, chin slightly down\n' +
            '- Shoulders visible, relaxed posture\n' +
            '- Arms positioned naturally (hands not visible or just touching hair/neck area)\n' +
            '- Overall demeanor: confident, poised, professional model energy\n' +
            '\n' +
            'MANDATORY IDENTITY CONSTRAINTS:\n' +
            '✓ This is the SAME PERSON, not a lookalike\n' +
            '✓ Use ZERO generic features - every feature comes from input image\n' +
            '✓ Do NOT blend or average with other faces\n' +
            '✓ Do NOT "beautify" or "fix" features beyond professional makeup\n' +
            '✓ Do NOT make symmetrical if input is asymmetric\n' +
            '✓ Do NOT change ethnic characteristics\n' +
            '✓ Do NOT alter bone structure\n' +
            '✓ Do NOT modify facial proportions\n' +
            '✓ Hair color MUST match input (this is non-negotiable)\n' +
            '✓ Skin tone MUST match input exactly\n' +
            '✓ Every measurement and ratio must be preserved\n' +
            '\n' +
            'VERIFICATION PROTOCOL:\n' +
            'Before finalizing, confirm:\n' +
            '1. Could their family recognize them instantly? (YES required)\n' +
            '2. Eye shape, color, and characteristics EXACTLY match input? (YES required)\n' +
            '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
            '4. Lip shape and fullness PRECISE match to input? (YES required)\n' +
            '5. Face shape and proportions EXACT match? (YES required)\n' +
            '6. Hair color SAME as input? (YES required)\n' +
            '7. Skin tone IDENTICAL to input? (YES required)\n' +
            '8. Cheekbone and jaw structure match input? (YES required)\n' +
            '9. All unique features preserved? (YES required)\n' +
            '10. Is this THE SAME PERSON? (MUST be YES)\n' +
            '\n' +
            'If ANY answer is NO → RESTART and copy features more precisely.\n' +
            '\n' +
            'WHAT CHANGES vs INPUT:\n' +
            '- Setting: professional studio with burgundy backdrop\n' +
            '- Lighting: professional fashion photography lighting\n' +
            '- Hair styling: voluminous, flowing (but same COLOR as input)\n' +
            '- Clothing: black high-neck sleeveless top\n' +
            '- Makeup: professional editorial (enhancing, not changing features)\n' +
            '- Expression: confident editorial gaze\n' +
            '- Pose: front-facing with slight head tilt\n' +
            '\n' +
            'WHAT NEVER CHANGES:\n' +
            '- Face structure (bone structure, proportions)\n' +
            '- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)\n' +
            '- Skin tone and undertone\n' +
            '- Hair color (CRITICAL - must match input exactly)\n' +
            '- Ethnic characteristics\n' +
            '- Eye color\n' +
            '- Natural facial asymmetries\n' +
            '- Unique identifying features (moles, marks, etc.)\n' +
            '- The fundamental DNA and identity of the face\n' +
            '\n' +
            'OUTPUT REQUIREMENTS:\n' +
            '- 8K photorealistic quality\n' +
            '- Professional fashion/beauty editorial photography\n' +
            '- Studio lighting: soft, flattering, dimensional\n' +
            '- Background: solid deep burgundy/maroon red\n' +
            '- Sharp focus on face and eyes\n' +
            '- Natural skin texture visible (not over-retouched)\n' +
            '- Professional color grading with rich warm tones\n' +
            '- 85mm portrait lens equivalent, f/2.8\n' +
            '- Slight depth of field with background softly out of focus\n' +
            '- High-end fashion magazine aesthetic (Vogue, Harper\'s Bazaar style)\n' +
            '- The subject should be INSTANTLY recognizable as the person from input\n' +
            '\n' +
            'CRITICAL REMINDERS:\n' +
            '- You are photographing an EXISTING person in a professional studio, not creating a new person\n' +
            '- Every facial feature is a direct copy from the input - no modifications\n' +
            '- "Similar" is failure - only "identical" is acceptable\n' +
            '- Hair COLOR from input is LOCKED - styling can change but color cannot\n' +
            '- Professional makeup enhances but does not alter underlying features\n' +
            '- Think of this as: "Same person, professional photoshoot with makeup and styling"\n' +
            '\n' +
            'ERROR PREVENTION:\n' +
            '- Reference the input image constantly during generation\n' +
            '- Copy features exactly, do not approximate\n' +
            '- When uncertain → copy more precisely from input\n' +
            '- Asymmetries and natural features are required - they define identity\n' +
            '- Makeup should enhance, not transform the face\n' +
            '- Hair can be styled differently but COLOR stays exactly the same',
        photoMode: 'single',
        preset: { id: 'golden', name: 'Золотой час' },
      },
    ],
  },
  {
    title: '💜 Студийные',
    packs: [
        {
            id: 'light',
            name: 'Нежный свет',
            image: 'https://i.imgur.com/V77jCcy.jpeg',
            prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
                '\n' +
                'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
                '\n' +
                'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
                '\n' +
                'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
                'Extract and lock in these features from the input image:\n' +
                '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
                '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
                '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
                '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
                '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
                '6. CHEEKBONES: Height, prominence, width\n' +
                '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
                '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
                '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
                '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
                '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
                '\n' +
                'LOCK THESE IN. DO NOT DEVIATE.\n' +
                '\n' +
                'Task: Create a cinematic portrait of THIS EXACT PERSON (from input image) in a new setting and pose.\n' +
                '\n' +
                'Setting: Professional fashion photography studio with neutral background.\n' +
                'Angle: 3/4 side profile, face turned slightly to the right.\n' +
                '\n' +
                'LIGHTING SPECIFICATION:\n' +
                '- Single horizontal beam of warm golden sunlight crosses the face at EYE LEVEL\n' +
                '- The beam illuminates BOTH EYES, creating golden glow in the irises\n' +
                '- Light also catches upper cheekbone and nose bridge\n' +
                '- Source: appears like sunlight through horizontal window blinds or gap\n' +
                '- Background: soft gray-blue, slightly out of focus\n' +
                '- Overall: dramatic but natural, cinematic quality\n' +
                '\n' +
                'HAIR - FROM INPUT IMAGE:\n' +
                '- Use the EXACT hair color from the input image (do not invent new color)\n' +
                '- If input has blonde hair → keep blonde\n' +
                '- If input has dark hair → keep dark  \n' +
                '- If input has red/auburn hair → keep red/auburn\n' +
                '- Only variation allowed: styling (can be worn long and straight with bangs IF it suits the input person\'s natural hair texture)\n' +
                '- But COLOR must match input exactly\n' +
                '\n' +
                'CLOTHING & STYLING:\n' +
                '- Simple black tank top with thin straps\n' +
                '- Small gold hoop earrings\n' +
                '- Natural makeup that enhances without changing features\n' +
                '\n' +
                'Expression: Serene, contemplative, eyes looking slightly upward toward the light source, lips gently parted.\n' +
                '\n' +
                'MANDATORY IDENTITY CONSTRAINTS:\n' +
                '✓ This is the SAME PERSON, not a lookalike\n' +
                '✓ Use ZERO generic features - every feature comes from input image\n' +
                '✓ Do NOT blend or average with other faces\n' +
                '✓ Do NOT "beautify" or "fix" features\n' +
                '✓ Do NOT make symmetrical if input is asymmetric\n' +
                '✓ Do NOT change ethnic characteristics\n' +
                '✓ Do NOT alter bone structure\n' +
                '✓ Do NOT modify facial proportions\n' +
                '✓ Hair color MUST match input (this is non-negotiable)\n' +
                '✓ Skin tone MUST match input exactly\n' +
                '✓ Every measurement and ratio must be preserved\n' +
                '\n' +
                'VERIFICATION PROTOCOL:\n' +
                'Before finalizing, confirm:\n' +
                '1. Could their mother recognize them instantly? (YES required)\n' +
                '2. Eye shape EXACTLY matches input? (YES required)\n' +
                '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
                '4. Lip shape PRECISE match to input? (YES required)\n' +
                '5. Face shape and proportions EXACT match? (YES required)\n' +
                '6. Hair color SAME as input? (YES required)\n' +
                '7. Skin tone IDENTICAL to input? (YES required)\n' +
                '8. All unique features (moles, asymmetries) preserved? (YES required)\n' +
                '9. Would face recognition AI identify as same person? (YES required)\n' +
                '10. Is this THE SAME PERSON or just similar? (MUST be SAME)\n' +
                '\n' +
                'If ANY answer is NO or "similar but not exact" → RESTART and copy features more precisely.\n' +
                '\n' +
                'WHAT CHANGES vs INPUT:\n' +
                '- Pose/angle: 3/4 profile instead of input angle\n' +
                '- Lighting: dramatic golden beam (different from input lighting)\n' +
                '- Background: neutral studio (different from input background)\n' +
                '- Clothing: black tank top (different from input outfit)\n' +
                '- Hair styling: can be styled long with bangs (but COLOR stays same as input)\n' +
                '- Expression: serene upward gaze (different from input expression)\n' +
                '\n' +
                'WHAT NEVER CHANGES:\n' +
                '- Face structure (bone structure, proportions)\n' +
                '- Every individual facial feature (eyes, nose, lips, etc.)\n' +
                '- Skin tone\n' +
                '- Hair color (CRITICAL - must match input)\n' +
                '- Ethnic characteristics\n' +
                '- Unique identifying features\n' +
                '- The fundamental DNA and identity of the face\n' +
                '\n' +
                'OUTPUT REQUIREMENTS:\n' +
                '- 8K photorealistic quality\n' +
                '- Professional fashion/editorial photography\n' +
                '- Horizontal golden light beam at eye level, illuminating the eyes\n' +
                '- Sharp focus on face, especially eyes\n' +
                '- Natural skin texture preserved\n' +
                '- Cinematic warm color grading\n' +
                '- 85mm lens equivalent, f/1.8-2.0\n' +
                '- Soft bokeh background\n' +
                '- The subject should be INSTANTLY recognizable as the person from input\n' +
                '\n' +
                'CRITICAL REMINDERS:\n' +
                '- You are photographing an EXISTING person in a new setting, not creating a new person\n' +
                '- Every facial feature is a direct copy from the input - no modifications\n' +
                '- "Similar" is failure - only "identical" is acceptable\n' +
                '- Hair color from input is LOCKED - do not change it\n' +
                '- Lighting and styling can change, but the face underneath cannot\n' +
                '- Think of this as: "Same person, different photoshoot"\n' +
                '\n' +
                'ERROR PREVENTION:\n' +
                '- Reference the input image constantly during generation\n' +
                '- Copy features exactly, do not approximate\n' +
                '- When uncertain → copy more precisely from input\n' +
                '- Asymmetries and imperfections are required - they define identity\n' +
                '- The light should enhance visibility, not excuse feature changes',
            photoMode: 'single',
            preset: { id: 'roses', name: 'В объятиях роз' },
        },
        {
            id: 'golden',
            name: 'Золотой час',
            image: 'https://i.imgur.com/WVu8odn.jpeg',
            prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
                '\n' +
                'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
                '\n' +
                'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
                '\n' +
                'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
                'Extract and lock in these features from the input image:\n' +
                '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
                '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
                '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
                '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
                '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
                '6. CHEEKBONES: Height, prominence, width\n' +
                '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
                '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
                '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
                '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
                '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
                '\n' +
                'LOCK THESE IN. DO NOT DEVIATE.\n' +
                '\n' +
                'Task: Create a professional fashion/beauty portrait of THIS EXACT PERSON (from input image) in a studio setting.\n' +
                '\n' +
                'COMPOSITION:\n' +
                '- Front-facing portrait with head slightly tilted to the subject\'s left\n' +
                '- Upper body visible (shoulders and torso in frame)\n' +
                '- Subject positioned centrally\n' +
                '- Camera angle: straight on, eye level\n' +
                '- 3/4 view with face turned slightly toward camera\n' +
                '\n' +
                'BACKGROUND:\n' +
                '- Deep rich burgundy/maroon red color (solid, uniform)\n' +
                '- Professional studio backdrop\n' +
                '- No texture or patterns, just clean solid color\n' +
                '- Creates dramatic contrast with subject\n' +
                '\n' +
                'LIGHTING:\n' +
                '- Professional studio lighting setup\n' +
                '- Main key light from front-left, creating soft directional light\n' +
                '- Subtle shadow on right side of face for dimension\n' +
                '- Catchlights visible in eyes\n' +
                '- Overall: soft, flattering, high-fashion editorial lighting\n' +
                '- Smooth even skin illumination\n' +
                '- No harsh shadows, but defined contours\n' +
                '\n' +
                'HAIR - FROM INPUT IMAGE:\n' +
                '- Use the EXACT hair color from the input image (do not change)\n' +
                '- If input has blonde hair → keep blonde\n' +
                '- If input has dark hair → keep dark\n' +
                '- If input has red/brown hair → keep that exact shade\n' +
                '- Style: Long, voluminous, flowing hair with natural wave and movement\n' +
                '- Hair swept back and to the side with volume at crown\n' +
                '- Some strands falling naturally around face and shoulders\n' +
                '- Texture: soft, silky, with natural movement and body\n' +
                '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
                '\n' +
                'CLOTHING:\n' +
                '- Black sleeveless high-neck top/turtleneck\n' +
                '- Simple, elegant, minimalist\n' +
                '- Allows focus to remain on face\n' +
                '- Professional fashion styling\n' +
                '\n' +
                'MAKEUP & STYLING:\n' +
                '- Professional editorial makeup\n' +
                '- Defined eyes with neutral/bronze eyeshadow tones\n' +
                '- Well-defined eyebrows (matching input person\'s natural brow shape)\n' +
                '- Natural-looking lashes or subtle enhancement\n' +
                '- Lips: natural nude/pink tone with slight gloss\n' +
                '- Skin: flawless but natural-looking finish\n' +
                '- Overall look: polished, sophisticated, high-fashion editorial\n' +
                '\n' +
                'EXPRESSION & POSE:\n' +
                '- Direct eye contact with camera\n' +
                '- Confident, strong, editorial gaze\n' +
                '- Lips slightly parted in neutral/sultry expression\n' +
                '- Neck elongated, chin slightly down\n' +
                '- Shoulders visible, relaxed posture\n' +
                '- Arms positioned naturally (hands not visible or just touching hair/neck area)\n' +
                '- Overall demeanor: confident, poised, professional model energy\n' +
                '\n' +
                'MANDATORY IDENTITY CONSTRAINTS:\n' +
                '✓ This is the SAME PERSON, not a lookalike\n' +
                '✓ Use ZERO generic features - every feature comes from input image\n' +
                '✓ Do NOT blend or average with other faces\n' +
                '✓ Do NOT "beautify" or "fix" features beyond professional makeup\n' +
                '✓ Do NOT make symmetrical if input is asymmetric\n' +
                '✓ Do NOT change ethnic characteristics\n' +
                '✓ Do NOT alter bone structure\n' +
                '✓ Do NOT modify facial proportions\n' +
                '✓ Hair color MUST match input (this is non-negotiable)\n' +
                '✓ Skin tone MUST match input exactly\n' +
                '✓ Every measurement and ratio must be preserved\n' +
                '\n' +
                'VERIFICATION PROTOCOL:\n' +
                'Before finalizing, confirm:\n' +
                '1. Could their family recognize them instantly? (YES required)\n' +
                '2. Eye shape, color, and characteristics EXACTLY match input? (YES required)\n' +
                '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
                '4. Lip shape and fullness PRECISE match to input? (YES required)\n' +
                '5. Face shape and proportions EXACT match? (YES required)\n' +
                '6. Hair color SAME as input? (YES required)\n' +
                '7. Skin tone IDENTICAL to input? (YES required)\n' +
                '8. Cheekbone and jaw structure match input? (YES required)\n' +
                '9. All unique features preserved? (YES required)\n' +
                '10. Is this THE SAME PERSON? (MUST be YES)\n' +
                '\n' +
                'If ANY answer is NO → RESTART and copy features more precisely.\n' +
                '\n' +
                'WHAT CHANGES vs INPUT:\n' +
                '- Setting: professional studio with burgundy backdrop\n' +
                '- Lighting: professional fashion photography lighting\n' +
                '- Hair styling: voluminous, flowing (but same COLOR as input)\n' +
                '- Clothing: black high-neck sleeveless top\n' +
                '- Makeup: professional editorial (enhancing, not changing features)\n' +
                '- Expression: confident editorial gaze\n' +
                '- Pose: front-facing with slight head tilt\n' +
                '\n' +
                'WHAT NEVER CHANGES:\n' +
                '- Face structure (bone structure, proportions)\n' +
                '- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)\n' +
                '- Skin tone and undertone\n' +
                '- Hair color (CRITICAL - must match input exactly)\n' +
                '- Ethnic characteristics\n' +
                '- Eye color\n' +
                '- Natural facial asymmetries\n' +
                '- Unique identifying features (moles, marks, etc.)\n' +
                '- The fundamental DNA and identity of the face\n' +
                '\n' +
                'OUTPUT REQUIREMENTS:\n' +
                '- 8K photorealistic quality\n' +
                '- Professional fashion/beauty editorial photography\n' +
                '- Studio lighting: soft, flattering, dimensional\n' +
                '- Background: solid deep burgundy/maroon red\n' +
                '- Sharp focus on face and eyes\n' +
                '- Natural skin texture visible (not over-retouched)\n' +
                '- Professional color grading with rich warm tones\n' +
                '- 85mm portrait lens equivalent, f/2.8\n' +
                '- Slight depth of field with background softly out of focus\n' +
                '- High-end fashion magazine aesthetic (Vogue, Harper\'s Bazaar style)\n' +
                '- The subject should be INSTANTLY recognizable as the person from input\n' +
                '\n' +
                'CRITICAL REMINDERS:\n' +
                '- You are photographing an EXISTING person in a professional studio, not creating a new person\n' +
                '- Every facial feature is a direct copy from the input - no modifications\n' +
                '- "Similar" is failure - only "identical" is acceptable\n' +
                '- Hair COLOR from input is LOCKED - styling can change but color cannot\n' +
                '- Professional makeup enhances but does not alter underlying features\n' +
                '- Think of this as: "Same person, professional photoshoot with makeup and styling"\n' +
                '\n' +
                'ERROR PREVENTION:\n' +
                '- Reference the input image constantly during generation\n' +
                '- Copy features exactly, do not approximate\n' +
                '- When uncertain → copy more precisely from input\n' +
                '- Asymmetries and natural features are required - they define identity\n' +
                '- Makeup should enhance, not transform the face\n' +
                '- Hair can be styled differently but COLOR stays exactly the same',
            photoMode: 'single',
            preset: { id: 'golden', name: 'Золотой час' },
        },
      {
        id: 'paris',
        name: 'Парижское кафе',
        image: 'https://i.imgur.com/NUGoTF2.jpeg',
        prompt: 'ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION\n' +
            '\n' +
            'INPUT: One image of a woman\n' +
            'OUTPUT: One elegant photograph of this EXACT woman on a luxurious staircase\n' +
            '\n' +
            '====================\n' +
            'PART 1: FACIAL DNA EXTRACTION (MANDATORY FIRST STEP)\n' +
            '====================\n' +
            '\n' +
            'BEFORE generating anything, you MUST extract and lock the "facial DNA" from the input:\n' +
            '\n' +
            'WOMAN\'S FACIAL DNA - Extract these parameters:\n' +
            '1. Eye geometry: [measure exact shape - almond/round/cat-eye, exact size, exact spacing, eyelid type]\n' +
            '2. Eye pigmentation: [exact color - specific shade, not just "brown" or "dark"]\n' +
            '3. Nose architecture: [bridge width, nostril shape, tip style - button/straight/upturned, overall length]\n' +
            '4. Lip morphology: [upper lip fullness, lower lip fullness, cupid\'s bow definition, mouth width, natural lip color]\n' +
            '5. Facial geometry: [face shape - oval/heart/round/square, jaw angle, chin shape - pointed/rounded]\n' +
            '6. Bone structure: [cheekbone height and prominence, facial contours]\n' +
            '7. Skin parameters: [exact tone - fair/medium/olive/tan, undertone - warm/cool/neutral, texture notes]\n' +
            '8. Hair pigmentation: [EXACT color - e.g., "jet black" or "dark brown with cool tones" or "black with slight warmth"]\n' +
            '9. Hair texture: [straight/wavy/volume, thickness, natural movement]\n' +
            '10. Distinguishing marks: [any moles, beauty marks, dimples, asymmetries - note exact locations]\n' +
            '\n' +
            'CRITICAL: These parameters are now LOCKED and IMMUTABLE. You will use ONLY these extracted features - NO generic features, NO approximations, NO artistic interpretation.\n' +
            '\n' +
            '====================\n' +
            'PART 2: SCENE CONSTRUCTION\n' +
            '====================\n' +
            '\n' +
            'LOCATION SPECIFICATION:\n' +
            '\n' +
            'SETTING: Luxurious classical European mansion/palace interior staircase\n' +
            '\n' +
            'STAIRCASE DETAILS:\n' +
            '- Grand marble staircase with ornate wrought iron railing\n' +
            '- Light beige/cream marble steps with subtle veining\n' +
            '- Decorative black wrought iron balustrade with elaborate scrollwork and floral patterns\n' +
            '- Dark wood handrail on top of iron railing\n' +
            '- Staircase curves/ascends in background\n' +
            '- Classical architecture, elegant and sophisticated\n' +
            '\n' +
            'BACKGROUND ELEMENTS:\n' +
            '- Cream/beige walls with classical molding and trim\n' +
            '- Ornate doorway/archway visible at top of stairs\n' +
            '- Warm ambient lighting from wall sconces\n' +
            '- Classical wall sconce with fabric lampshade (visible on right wall)\n' +
            '- Sophisticated interior design with period details\n' +
            '- Additional decorative elements: possible sculpture or vase on pedestal\n' +
            '\n' +
            'LIGHTING:\n' +
            '- Warm golden ambient lighting throughout\n' +
            '- Wall sconces creating soft glowing pools of light\n' +
            '- Natural warm color temperature (2800-3200K)\n' +
            '- Creates intimate, elegant evening atmosphere\n' +
            '- Soft shadows and dimensional lighting\n' +
            '- Not harsh - romantic and atmospheric\n' +
            '- Highlights subject while maintaining ambient glow\n' +
            '\n' +
            'ATMOSPHERE:\n' +
            '- Luxurious, sophisticated, high-end\n' +
            '- Evening/night setting\n' +
            '- Warm, inviting, intimate\n' +
            '- Classical European elegance\n' +
            '- Old-world charm with modern fashion\n' +
            '\n' +
            '====================\n' +
            'PART 3: SUBJECT ASSEMBLY (USING LOCKED FACIAL DNA)\n' +
            '====================\n' +
            '\n' +
            'WOMAN CONSTRUCTION:\n' +
            '\n' +
            'FACE ASSEMBLY - Use ONLY the extracted facial DNA parameters:\n' +
            '- Install eye geometry from extraction → exact shape, exact size, exact spacing, exact eyelid structure\n' +
            '- Install eye pigmentation from extraction → exact color\n' +
            '- Install nose architecture from extraction → exact bridge, nostrils, tip, length\n' +
            '- Install lip morphology from extraction → exact fullness, width, shape, cupid\'s bow\n' +
            '- Install facial geometry from extraction → exact face shape, jaw, chin\n' +
            '- Install bone structure from extraction → exact cheekbone placement and prominence\n' +
            '- Install skin parameters from extraction → exact tone and undertone\n' +
            '- Install distinguishing marks from extraction → exact positions\n' +
            '\n' +
            'HAIR:\n' +
            '- Color: Use EXACT pigmentation from extraction (not approximate - the specific shade identified)\n' +
            '- Style: Long, flowing, voluminous\n' +
            '- Texture: Slightly wavy with natural body and movement\n' +
            '- Length: Past shoulders, reaching mid-back or lower\n' +
            '- Styling: Loose, tousled, natural-looking waves\n' +
            '- Falls over shoulders and down back\n' +
            '- Some strands around face\n' +
            '- Appears slightly windswept/naturally styled\n' +
            '\n' +
            'MAKEUP:\n' +
            '- Natural to soft glam\n' +
            '- Defined but not heavy\n' +
            '- Subtle eye makeup - possibly light liner or neutral shadow\n' +
            '- Natural-looking lashes\n' +
            '- Well-groomed eyebrows matching natural shape from DNA\n' +
            '- Soft nude or pink lip color with slight gloss\n' +
            '- Fresh, dewy skin\n' +
            '- Subtle highlight on cheekbones\n' +
            '- Natural, elegant makeup enhancing features without transforming\n' +
            '\n' +
            'OUTFIT - CRITICAL DETAILS:\n' +
            '\n' +
            'TOP:\n' +
            '- Black sheer lace long-sleeve crop top\n' +
            '- Intricate floral/botanical lace pattern throughout\n' +
            '- See-through mesh/lace fabric\n' +
            '- Long sleeves extending to wrists\n' +
            '- OPEN BACK design - back is completely exposed/bare\n' +
            '- High neckline in front\n' +
            '- Cropped length - ends above natural waist, exposing midriff\n' +
            '- Elegant, sophisticated, evening wear\n' +
            '\n' +
            'BOTTOM:\n' +
            '- High-waisted black wide-leg trousers or palazzo pants\n' +
            '- Sleek, tailored fit at waist\n' +
            '- Flowing wide legs\n' +
            '- Floor-length or near floor-length\n' +
            '- Clean, elegant silhouette\n' +
            '- Matches the sophistication of the lace top\n' +
            '\n' +
            'STYLING:\n' +
            '- Elegant, high-fashion evening look\n' +
            '- Combination of delicate (lace) and structured (trousers)\n' +
            '- Shows skin strategically (open back, midriff)\n' +
            '- Sophisticated and refined\n' +
            '\n' +
            'POSITION & POSE - SPECIFIC:\n' +
            '\n' +
            'BODY POSITIONING:\n' +
            '- Standing on marble staircase, approximately 4-5 steps up from bottom\n' +
            '- Body oriented facing UP the stairs (back toward camera)\n' +
            '- Torso twisted to look back over shoulder at camera\n' +
            '- Left hand resting on wrought iron railing\n' +
            '- Right arm relaxed at side or touching hair\n' +
            '- Weight on right leg, left leg slightly behind or to side\n' +
            '- Elegant, elongated posture\n' +
            '\n' +
            'HEAD & FACE:\n' +
            '- Head turned to look back over left shoulder\n' +
            '- Face in 3/4 back view toward camera\n' +
            '- Direct eye contact with camera over shoulder\n' +
            '- Chin slightly lifted\n' +
            '- Graceful neck line visible\n' +
            '\n' +
            'EXPRESSION:\n' +
            '- Soft, confident gaze at camera\n' +
            '- Slight subtle smile or serene expression\n' +
            '- Elegant, poised, sophisticated\n' +
            '- Mysterious, alluring but refined\n' +
            '- Natural, not overly posed\n' +
            '\n' +
            'BODY LANGUAGE:\n' +
            '- Relaxed but elegant stance\n' +
            '- One hand on railing for support/composition\n' +
            '- Back fully visible showing lace detail and bare skin\n' +
            '- Hair cascading down back\n' +
            '- Graceful, feminine posture\n' +
            '- Confident, editorial modeling energy\n' +
            '\n' +
            'CAMERA ANGLE & FRAMING:\n' +
            '- Shot from below (photographer at bottom of stairs looking up)\n' +
            '- Medium-full shot showing subject from feet/calves up\n' +
            '- Captures staircase environment and architecture\n' +
            '- Subject positioned in lower third to middle of frame\n' +
            '- Staircase and background visible behind/above subject\n' +
            '- Vertical/portrait orientation\n' +
            '- Environmental portrait style\n' +
            '\n' +
            '====================\n' +
            'PART 4: QUALITY ASSURANCE CHECKLIST\n' +
            '====================\n' +
            '\n' +
            'BEFORE FINALIZING, verify EACH item = TRUE:\n' +
            '\n' +
            'IDENTITY CHECK - WOMAN:\n' +
            '[ ] Eyes: EXACT match to extracted DNA (shape, color, all parameters)\n' +
            '[ ] Nose: EXACT match to extracted DNA (all dimensions)\n' +
            '[ ] Lips: EXACT match to extracted DNA (fullness, shape, width)\n' +
            '[ ] Face shape: EXACT match to extracted DNA\n' +
            '[ ] Cheekbones: EXACT match to extracted DNA\n' +
            '[ ] Hair color: EXACT match to extracted DNA (specific shade, not approximate)\n' +
            '[ ] Skin tone: EXACT match to extracted DNA\n' +
            '[ ] Unique features: All marks/asymmetries present from DNA\n' +
            '[ ] INSTANT RECOGNITION TEST: Her family/friends would say "that\'s her" not "looks like her"\n' +
            '[ ] Face recognition software would identify as same person\n' +
            '\n' +
            'SETTING CHECK:\n' +
            '[ ] Grand marble staircase visible\n' +
            '[ ] Ornate wrought iron railing with scrollwork\n' +
            '[ ] Warm ambient lighting from wall sconces\n' +
            '[ ] Classical mansion/palace interior\n' +
            '[ ] Cream/beige walls with molding\n' +
            '[ ] Elegant, luxurious atmosphere\n' +
            '\n' +
            'OUTFIT CHECK:\n' +
            '[ ] Black sheer lace long-sleeve crop top\n' +
            '[ ] Intricate lace pattern visible\n' +
            '[ ] OPEN BACK clearly visible (bare back showing)\n' +
            '[ ] High-waisted black wide-leg trousers\n' +
            '[ ] Midriff exposed between top and pants\n' +
            '[ ] Elegant, sophisticated styling\n' +
            '\n' +
            'POSE CHECK:\n' +
            '[ ] Subject on staircase facing away, looking back over shoulder\n' +
            '[ ] Hand on wrought iron railing\n' +
            '[ ] 3/4 back view with face turned to camera\n' +
            '[ ] Hair flowing down back\n' +
            '[ ] Elegant, poised posture\n' +
            '[ ] Shot from below looking up stairs\n' +
            '\n' +
            'PHOTOGRAPHY CHECK:\n' +
            '[ ] Portrait orientation (vertical)\n' +
            '[ ] Medium-full framing\n' +
            '[ ] Warm golden lighting\n' +
            '[ ] Sharp focus on subject\n' +
            '[ ] Environmental portrait showing setting\n' +
            '[ ] Professional editorial quality\n' +
            '[ ] 8K resolution\n' +
            '\n' +
            'IF ANY CHECKBOX = FALSE → DO NOT PROCEED → REGENERATE WITH CORRECTIONS\n' +
            '\n' +
            '====================\n' +
            'PART 5: EXECUTION PROTOCOL\n' +
            '====================\n' +
            '\n' +
            'STEP 1: Study woman\'s input image for 20 seconds - extract facial DNA\n' +
            'STEP 2: Lock facial DNA profile - this is now immutable\n' +
            'STEP 3: Construct scene (luxurious staircase, warm lighting)\n' +
            'STEP 4: Assemble woman using ONLY her facial DNA (no generic features)\n' +
            'STEP 5: Position subject on staircase in over-shoulder pose\n' +
            'STEP 6: Run quality assurance checklist\n' +
            'STEP 7: If all checks pass → finalize\n' +
            'STEP 8: If any check fails → regenerate with corrections\n' +
            '\n' +
            'CRITICAL SUCCESS CRITERIA:\n' +
            '\n' +
            '1. IDENTITY PRECISION: Woman must be IDENTICAL to input (not similar - IDENTICAL)\n' +
            '   - Test: Would facial recognition software match her? YES required\n' +
            '   - Test: Would her family recognize her instantly? YES required\n' +
            '   - Test: Are you using her exact features or approximating? EXACT required\n' +
            '\n' +
            '2. SETTING ACCURACY: Luxurious classical staircase environment\n' +
            '   - Test: Marble stairs with ornate iron railing? YES required\n' +
            '   - Test: Warm ambient lighting? YES required\n' +
            '   - Test: Elegant mansion interior? YES required\n' +
            '\n' +
            '3. STYLING ACCURACY: Black lace crop top with open back + black trousers\n' +
            '   - Test: Sheer lace long-sleeve top? YES required\n' +
            '   - Test: Open back visible? YES required\n' +
            '   - Test: High-waisted black trousers? YES required\n' +
            '\n' +
            '4. POSE ACCURACY: Over-shoulder look back pose on stairs\n' +
            '   - Test: Subject facing up stairs, looking back? YES required\n' +
            '   - Test: Hand on railing? YES required\n' +
            '   - Test: Shot from below? YES required\n' +
            '\n' +
            'FAILURE STATES:\n' +
            '- "The woman looks similar to input" = FAILURE (must be identical)\n' +
            '- "I used some generic features" = FAILURE (only input features allowed)\n' +
            '- "Hair color is approximately right" = FAILURE (must be exact)\n' +
            '- "Back not visible" = FAILURE (open back is key element)\n' +
            '\n' +
            'SUCCESS STATE:\n' +
            '- Woman is UNMISTAKABLY the same individual from input\n' +
            '- Elegant staircase setting captured\n' +
            '- Sophisticated styling and pose executed\n' +
            '- Professional editorial photography quality\n' +
            '\n' +
            'COLOR GRADING:\n' +
            '- Warm golden tones throughout\n' +
            '- Romantic, luxurious atmosphere\n' +
            '- Subtle, sophisticated\n' +
            '- Natural warm skin tones\n' +
            '- Rich blacks in outfit\n' +
            '- Cream/beige architecture tones\n' +
            '- Intimate evening ambiance\n' +
            '- High-end fashion editorial aesthetic\n' +
            '\n' +
            'OUTPUT: One 8K photorealistic photograph of this exact woman in an elegant over-shoulder pose on a luxurious classical staircase, wearing a black lace crop top with open back and black trousers.',
        photoMode: 'single',
        preset: { id: 'paris', name: 'Парижское кафе' },
      },
      {
        id: 'coastal',
        name: 'Легкий люкс',
        image: 'https://i.imgur.com/tBqzTsp.jpeg',
        prompt: 'EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION\n' +
            '\n' +
            'YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.\n' +
            'YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.\n' +
            '\n' +
            '====================\n' +
            'ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT\'S EXPLICITLY LISTED\n' +
            '====================\n' +
            '\n' +
            'WHAT CHANGES (ONLY THESE):\n' +
            '1. Setting → luxurious interior with mirrors\n' +
            '2. Lighting → glamorous evening lighting with bokeh\n' +
            '3. Outfit → crystal/rhinestone embellished corset dress\n' +
            '4. Jewelry → statement diamond chandelier earrings and necklace\n' +
            '5. Hair styling → sleek straight side-parted (but COLOR stays same)\n' +
            '\n' +
            'WHAT NEVER CHANGES (EVERYTHING ELSE):\n' +
            '- EVERY facial feature\n' +
            '- EVERY hair COLOR characteristic  \n' +
            '- EVERY skin characteristic\n' +
            '- EVERY unique detail\n' +
            '\n' +
            'IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN\'T CHANGE\n' +
            '\n' +
            '====================\n' +
            'PART 1: FACE EXTRACTION (MANDATORY)\n' +
            '====================\n' +
            '\n' +
            'STEP 1: Open input image. Stare at the face for 30 full seconds.\n' +
            '\n' +
            'STEP 2: LOCK THE FOLLOWING (exact measurements):\n' +
            '\n' +
            'EYES - NO CHANGES ALLOWED:\n' +
            '- Exact shape from input\n' +
            '- Exact color from input (blue? Green? Gray-blue? The PRECISE shade)\n' +
            '- Exact size from input\n' +
            '- Exact spacing from input\n' +
            '- Exact eyelid structure from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'EYEBROWS - NO CHANGES ALLOWED:\n' +
            '- Exact shape from input\n' +
            '- Exact thickness from input\n' +
            '- Exact color from input\n' +
            '- Exact arch position from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'NOSE - NO CHANGES ALLOWED:\n' +
            '- Exact bridge width from input\n' +
            '- Exact nostril shape from input\n' +
            '- Exact tip shape from input\n' +
            '- Exact length from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'LIPS - NO CHANGES ALLOWED:\n' +
            '- Exact upper lip shape from input\n' +
            '- Exact lower lip shape from input\n' +
            '- Exact fullness ratio from input\n' +
            '- Exact cupid\'s bow from input\n' +
            '- Exact width from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'FACE SHAPE - NO CHANGES ALLOWED:\n' +
            '- Exact face outline from input\n' +
            '- Exact jaw shape from input\n' +
            '- Exact chin shape from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'CHEEKBONES - NO CHANGES ALLOWED:\n' +
            '- Exact position from input\n' +
            '- Exact prominence from input\n' +
            '- COPY EXACTLY\n' +
            '\n' +
            'SKIN - NO CHANGES ALLOWED:\n' +
            '- EXACT tone from input\n' +
            '- EXACT undertone from input\n' +
            '- DO NOT "SMOOTH" OR "PERFECT" - COPY AS IS\n' +
            '\n' +
            'HAIR COLOR - ABSOLUTE ZERO CHANGES ALLOWED:\n' +
            '- Look at input hair color for 10 seconds\n' +
            '- What is the EXACT shade? Light blonde? Dark blonde? Ash blonde? Golden blonde? Dirty blonde? Platinum? Medium blonde?\n' +
            '- Does it have highlights? Lowlights? Dimension?\n' +
            '- Lock this EXACT color\n' +
            '- DO NOT:\n' +
            '  * Make it darker\n' +
            '  * Make it lighter  \n' +
            '  * Change the undertone\n' +
            '  * Remove dimension\n' +
            '  * Add dimension\n' +
            '- USE EXACT COLOR FROM INPUT - NO EXCEPTIONS\n' +
            '\n' +
            '====================\n' +
            'PART 2: SCENE CONSTRUCTION\n' +
            '====================\n' +
            '\n' +
            'SETTING - LUXURIOUS INTERIOR:\n' +
            '\n' +
            'LOCATION:\n' +
            '- Upscale interior space (hotel, mansion, or luxury apartment)\n' +
            '- Modern glamorous aesthetic\n' +
            '- Evening/night setting\n' +
            '\n' +
            'BACKGROUND ELEMENTS:\n' +
            '- Large mirrors with ornate frames or modern edges\n' +
            '- Reflections visible in mirrors (subject\'s reflection, bokeh lights)\n' +
            '- Dark walls or panels (black, dark gray, or deep charcoal)\n' +
            '- Warm ambient lighting in background\n' +
            '- Golden/warm bokeh lights visible (from chandeliers, sconces, or decorative lights)\n' +
            '- Sophisticated, high-end atmosphere\n' +
            '\n' +
            'LIGHTING - GLAMOROUS SETUP:\n' +
            '- Professional beauty lighting\n' +
            '- Main light from front creating glossy, luminous skin\n' +
            '- Creates strong highlights on skin (forehead, cheekbones, nose, shoulders, décolletage)\n' +
            '- Warm-neutral color temperature (3500-4000K)\n' +
            '- Bokeh lights in background creating dreamy atmosphere\n' +
            '- Even, flattering illumination\n' +
            '- Creates dewy, glowing skin effect\n' +
            '- Highlights catch on rhinestones/crystals creating sparkle\n' +
            '\n' +
            'ATMOSPHERE:\n' +
            '- Glamorous, luxurious, high-fashion\n' +
            '- Evening elegance\n' +
            '- Red carpet or gala aesthetic\n' +
            '- Sophisticated and polished\n' +
            '\n' +
            '====================\n' +
            'PART 3: SUBJECT ASSEMBLY (USING LOCKED FEATURES)\n' +
            '====================\n' +
            '\n' +
            'WOMAN CONSTRUCTION:\n' +
            '\n' +
            'FACE ASSEMBLY - Use ONLY the extracted features:\n' +
            '- Install EXACT eyes from input (shape, color, spacing)\n' +
            '- Install EXACT nose from input (all dimensions)\n' +
            '- Install EXACT lips from input (shape, fullness, width)\n' +
            '- Install EXACT face shape from input\n' +
            '- Install EXACT cheekbones from input\n' +
            '- Install EXACT skin tone from input\n' +
            '- Install EXACT eyebrows from input\n' +
            '\n' +
            'HAIR:\n' +
            '- COLOR: Use EXACT color from input (the specific blonde shade identified - DO NOT CHANGE)\n' +
            '- Style: Sleek, straight, smooth\n' +
            '- Parted deeply to one side (left or right)\n' +
            '- Falls straight down, tucked behind ear on one side\n' +
            '- Length: Long, past shoulders\n' +
            '- Texture: Glossy, polished, salon-perfect finish\n' +
            '- BUT COLOR MUST STAY EXACT FROM INPUT - NO DARKENING, NO LIGHTENING\n' +
            '\n' +
            'MAKEUP - GLAMOROUS STYLE:\n' +
            '- Eyes: Defined winged eyeliner (black, elegant wing)\n' +
            '- Eyeshadow: Neutral warm tones with subtle shimmer\n' +
            '- Eyelashes: Long, dramatic (possibly false lashes)\n' +
            '- Eyebrows: Perfectly groomed, defined\n' +
            '- Skin: Ultra-dewy, glossy, luminous finish\n' +
            '- Heavy highlight on: cheekbones, nose bridge, cupid\'s bow, center of forehead\n' +
            '- Contouring: Subtle, enhancing bone structure\n' +
            '- Lips: Glossy nude-pink or nude-beige\n' +
            '- High shine/gloss on lips\n' +
            '- Overall: High-glam red carpet makeup\n' +
            '\n' +
            'JEWELRY - STATEMENT PIECES:\n' +
            '\n' +
            'EARRINGS:\n' +
            '- Large dramatic chandelier earrings\n' +
            '- Crystal/diamond rhinestone design\n' +
            '- Cascading dangles (multiple tiers)\n' +
            '- Approximately 7-10cm long\n' +
            '- Sparkling, catching light\n' +
            '- Glamorous, show-stopping\n' +
            '\n' +
            'NECKLACE:\n' +
            '- Layered rhinestone/diamond necklace\n' +
            '- Multiple delicate chains with crystals\n' +
            '- Sits at collarbone and upper chest\n' +
            '- Draping, elegant design\n' +
            '- Coordinates with earrings\n' +
            '- Sparkling, luxurious\n' +
            '\n' +
            'OUTFIT - CRYSTAL EMBELLISHED:\n' +
            '\n' +
            'DRESS/CORSET:\n' +
            '- Crystal/rhinestone embellished corset or dress\n' +
            '- Nude/beige/champagne base fabric\n' +
            '- Completely covered in crystals/rhinestones creating dense sparkle\n' +
            '- Sweetheart neckline or structured bust\n' +
            '- Thin crystal-embellished straps\n' +
            '- Form-fitting, structured bodice\n' +
            '- Intricate crystal pattern/design\n' +
            '- High-end couture or designer aesthetic\n' +
            '- Red carpet worthy\n' +
            '\n' +
            'VISIBLE DETAILS:\n' +
            '- Décolletage exposed\n' +
            '- Shoulders bare\n' +
            '- Upper chest visible\n' +
            '- Crystals catching light and sparkling\n' +
            '\n' +
            'SKIN APPEARANCE:\n' +
            '- Luminous, glowing, dewy\n' +
            '- Strong highlights creating wet/glossy look\n' +
            '- Professional body makeup/oil for shine\n' +
            '- Healthy, radiant appearance\n' +
            '\n' +
            'EXPRESSION & POSE:\n' +
            '\n' +
            'HEAD POSITION:\n' +
            '- Turned to 3/4 profile (showing side of face and profile)\n' +
            '- Looking slightly away from camera or to the side\n' +
            '- Elegant, poised angle\n' +
            '- Chin slightly lifted\n' +
            '- Showcases jawline and neck\n' +
            '\n' +
            'EXPRESSION:\n' +
            '- Serene, confident, elegant\n' +
            '- Slight subtle smile or neutral sophisticated expression\n' +
            '- Relaxed but poised\n' +
            '- Model-like composure\n' +
            '- Glamorous, refined\n' +
            '\n' +
            'BODY POSITIONING:\n' +
            '- Upper body and shoulders visible\n' +
            '- Body angled slightly\n' +
            '- Elegant, upright posture\n' +
            '- Shoulders back\n' +
            '- Confident stance\n' +
            '\n' +
            'CAMERA & TECHNICAL SPECS:\n' +
            '\n' +
            'FRAMING:\n' +
            '- Portrait orientation (vertical)\n' +
            '- Medium closeup (head, neck, shoulders, upper torso)\n' +
            '- Subject positioned slightly off-center or centered\n' +
            '- Mirror reflection may be visible in background\n' +
            '\n' +
            'CAMERA ANGLE:\n' +
            '- Straight-on to slightly from side\n' +
            '- Eye level\n' +
            '- Professional beauty/fashion photography angle\n' +
            '\n' +
            'FOCUS:\n' +
            '- Sharp focus on face\n' +
            '- Crystals/rhinestones in focus and sparkling\n' +
            '- Background softly out of focus with bokeh lights\n' +
            '- Shallow depth of field (f/1.8-2.8)\n' +
            '\n' +
            '====================\n' +
            'PART 4: PRE-GENERATION CHECKLIST\n' +
            '====================\n' +
            '\n' +
            '[ ] I studied the input face for 30+ seconds - YES required\n' +
            '[ ] I identified the EXACT hair color (specific blonde shade) - YES required\n' +
            '[ ] I identified EXACT eye color - YES required  \n' +
            '[ ] I identified EXACT nose shape - YES required\n' +
            '[ ] I identified EXACT lip shape - YES required\n' +
            '[ ] I identified EXACT face shape - YES required\n' +
            '[ ] I identified EXACT skin tone - YES required\n' +
            '[ ] I will use EXACT hair color (not change it) - YES required\n' +
            '[ ] I will use EXACT features (not approximate) - YES required\n' +
            '\n' +
            '====================\n' +
            'PART 5: POST-GENERATION VERIFICATION\n' +
            '====================\n' +
            '\n' +
            'HAIR CHECK:\n' +
            '1. Is the hair EXACTLY the same color as input? YES/NO\n' +
            '2. Did I darken the hair? NO required\n' +
            '3. Did I lighten the hair? NO required\n' +
            '4. Is it the SAME blonde shade from input? YES required\n' +
            '\n' +
            'FACE CHECK:\n' +
            '5. Are these the SAME eyes from input? YES/NO\n' +
            '6. Is this the SAME nose from input? YES/NO\n' +
            '7. Are these the SAME lips from input? YES/NO\n' +
            '8. Is this the SAME face shape from input? YES/NO\n' +
            '9. Is this the SAME skin tone from input? YES/NO\n' +
            '\n' +
            'COMPOSITION CHECK:\n' +
            '10. Luxurious interior with mirrors? YES/NO\n' +
            '11. Crystal/rhinestone embellished dress? YES/NO\n' +
            '12. Statement chandelier earrings and necklace? YES/NO\n' +
            '13. Glossy, luminous skin with highlights? YES/NO\n' +
            '14. Bokeh lights in background? YES/NO\n' +
            '\n' +
            'IDENTITY CHECK:\n' +
            '15. Would facial recognition match this to input? YES/NO\n' +
            '16. Is this the SAME PERSON? YES required\n' +
            '\n' +
            'If ANY answer is wrong → Regenerate with exact copying.\n' +
            '\n' +
            '====================\n' +
            'FINAL DIRECTIVE\n' +
            '====================\n' +
            '\n' +
            'Hair color is the #1 failure point. \n' +
            'DO NOT CHANGE HAIR COLOR.\n' +
            'DO NOT CHANGE HAIR COLOR.\n' +
            'DO NOT CHANGE HAIR COLOR.\n' +
            '\n' +
            'This is COPYING, not CREATING.\n' +
            'USE THE EXACT HAIR COLOR FROM INPUT.\n' +
            '\n' +
            '====================\n' +
            'COLOR GRADING\n' +
            '====================\n' +
            '\n' +
            '- Warm-neutral tones\n' +
            '- High gloss, dewy skin finish\n' +
            '- Sparkling crystals/rhinestones\n' +
            '- Golden bokeh lights in background\n' +
            '- Rich, luxurious color palette\n' +
            '- Professional retouching maintaining natural features\n' +
            '- High-end fashion editorial aesthetic\n' +
            '- Vogue/Harper\'s Bazaar glamour style\n' +
            '\n' +
            'OUTPUT: Professional glamour portrait of the EXACT SAME WOMAN from input (100% identity match), wearing crystal-embellished corset dress with statement jewelry, luxurious interior setting with mirrors, dewy glam makeup, 8K quality.\n' +
            '\n' +
            'ZERO TOLERANCE FOR DEVIATION.\n' +
            'EXACT COPY REQUIRED.',
        photoMode: 'single',
        preset: { id: 'coastal', name: 'Прибрежный' },
      },
    ],
  },
  // {
  //   title: '💞 Парные',
  //   packs: [
  //     {
  //       id: 'love_story',
  //       image: 'https://i.imgur.com/BCriZGn.jpeg',
  //       prompt: 'ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION\n' +
  //           '\n' +
  //           'INPUT: Two separate images - one man, one woman\n' +
  //           'OUTPUT: Overhead photograph of these EXACT two people in elevator with mirror\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 1: FACIAL DNA EXTRACTION (MANDATORY - 60 SECONDS)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Study EACH input for 30 seconds. Extract and LOCK exact DNA:\n' +
  //           '\n' +
  //           'MAN\'S FACIAL DNA - EXACT parameters (NO approximations):\n' +
  //           '\n' +
  //           '1. Eye geometry:\n' +
  //           '   - Shape: [round? almond? hooded? deep-set? - describe EXACT contour]\n' +
  //           '   - Size: [small/medium/large relative to face - EXACT]\n' +
  //           '   - Spacing: [close-set? wide-set? - measure EXACT distance]\n' +
  //           '   - Color: [NOT "blue/brown" - EXACT: light blue? gray-blue? hazel? medium brown? dark brown?]\n' +
  //           '   - Eyelid: [monolid? double? hooded? - EXACT type]\n' +
  //           '\n' +
  //           '2. Nose architecture:\n' +
  //           '   - Bridge: [narrow? medium? wide? - EXACT width]\n' +
  //           '   - Nostrils: [round? oval? flared? tight? - EXACT shape]\n' +
  //           '   - Tip: [bulbous? pointed? button? upturned? straight? downturned? - EXACT]\n' +
  //           '   - Length: [short? medium? long? - EXACT]\n' +
  //           '\n' +
  //           '3. Lip morphology:\n' +
  //           '   - Upper lip: [thin? medium? full? - EXACT thickness]\n' +
  //           '   - Lower lip: [thin? medium? full? - EXACT thickness]\n' +
  //           '   - Ratio: [upper:lower proportion - EXACT]\n' +
  //           '   - Width: [narrow? medium? wide? - EXACT]\n' +
  //           '   - Cupid\'s bow: [defined? soft? flat? - EXACT]\n' +
  //           '\n' +
  //           '4. Facial geometry:\n' +
  //           '   - Shape: [square? oval? rectangular? round? long? - EXACT]\n' +
  //           '   - Jaw: [sharp angular? soft rounded? strong? - EXACT angle]\n' +
  //           '   - Chin: [pointed? rounded? square? prominent? recessed? - EXACT]\n' +
  //           '\n' +
  //           '5. Bone structure:\n' +
  //           '   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]\n' +
  //           '\n' +
  //           '6. Skin parameters:\n' +
  //           '   - Tone: [fair? light? medium? tan? olive? - EXACT shade]\n' +
  //           '   - Undertone: [warm/golden? cool/pink? neutral? - EXACT]\n' +
  //           '\n' +
  //           '7. Hair pigmentation:\n' +
  //           '   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? with warm/cool undertones?]\n' +
  //           '   - Style: [buzzed? short crop? textured? - EXACT]\n' +
  //           '\n' +
  //           '8. Facial hair pattern:\n' +
  //           '   - Style: [clean-shaven? stubble? short beard? full beard? goatee? - EXACT]\n' +
  //           '   - Coverage: [chin only? full face? mustache? - EXACT areas]\n' +
  //           '   - Color: [same as hair? darker? - EXACT]\n' +
  //           '   - Density: [sparse? medium? thick? - EXACT]\n' +
  //           '\n' +
  //           '9. Proportions (measure):\n' +
  //           '   - Eye spacing ÷ face width = [ratio]\n' +
  //           '   - Nose width ÷ face width = [ratio]\n' +
  //           '\n' +
  //           'WOMAN\'S FACIAL DNA - EXACT parameters (NO approximations):\n' +
  //           '\n' +
  //           '1. Eye geometry:\n' +
  //           '   - Shape: [round? almond? cat-eye? upturned? downturned? - EXACT]\n' +
  //           '   - Size: [small/medium/large - EXACT]\n' +
  //           '   - Spacing: [close? medium? wide? - EXACT]\n' +
  //           '   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? hazel? amber?]\n' +
  //           '   - Eyelid: [monolid? double? hooded? - EXACT]\n' +
  //           '\n' +
  //           '2. Nose architecture:\n' +
  //           '   - Bridge: [narrow? medium? wide? - EXACT]\n' +
  //           '   - Tip: [button? straight? upturned? pointed? - EXACT]\n' +
  //           '   - Nostrils: [round? oval? tight? - EXACT]\n' +
  //           '   - Length: [short? medium? long? - EXACT]\n' +
  //           '\n' +
  //           '3. Lip morphology:\n' +
  //           '   - Upper lip: [thin? medium? full? - EXACT]\n' +
  //           '   - Lower lip: [thin? medium? full? - EXACT]\n' +
  //           '   - Ratio: [upper:lower - EXACT]\n' +
  //           '   - Cupid\'s bow: [sharp? soft? undefined? - EXACT]\n' +
  //           '   - Width: [narrow? medium? wide? - EXACT]\n' +
  //           '\n' +
  //           '4. Facial geometry:\n' +
  //           '   - Shape: [oval? heart? diamond? round? square? - EXACT]\n' +
  //           '   - Jaw: [soft? defined? angular? - EXACT]\n' +
  //           '   - Chin: [pointed? rounded? small? prominent? - EXACT]\n' +
  //           '\n' +
  //           '5. Bone structure:\n' +
  //           '   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]\n' +
  //           '\n' +
  //           '6. Skin parameters:\n' +
  //           '   - Tone: [fair? light? medium? olive? tan? - EXACT]\n' +
  //           '   - Undertone: [warm? cool? neutral? - EXACT]\n' +
  //           '\n' +
  //           '7. Hair pigmentation:\n' +
  //           '   - Color: [NOT "dark" - EXACT: jet black? dark brown? medium brown? with cool/warm tones?]\n' +
  //           '   - Texture: [straight? wavy? - EXACT]\n' +
  //           '\n' +
  //           '8. Proportions (measure):\n' +
  //           '   - Eye spacing ÷ face width = [ratio]\n' +
  //           '   - Nose width ÷ face width = [ratio]\n' +
  //           '\n' +
  //           'DNA NOW LOCKED. IMMUTABLE. ZERO DEVIATION PERMITTED.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PRE-GENERATION TEST\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Before proceeding, answer:\n' +
  //           '1. Man\'s EXACT eye color? (not "blue" - specific shade)\n' +
  //           '2. Man\'s EXACT nose shape? (not "normal" - specific structure)\n' +
  //           '3. Man\'s EXACT facial hair? (not "beard" - style, coverage, density, color)\n' +
  //           '4. Man\'s EXACT hair color? (not "brown" - shade with undertones)\n' +
  //           '5. Woman\'s EXACT eye color? (not "brown" - specific shade)\n' +
  //           '6. Woman\'s EXACT hair color? (not "dark" - specific shade with tones)\n' +
  //           '\n' +
  //           'If ANY answer is vague → STUDY INPUTS AGAIN. Do NOT proceed.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 2: ELEVATOR SPECIFICATION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'CAMERA: Ceiling-mounted, 90° straight down (bird\'s eye view)\n' +
  //           '\n' +
  //           'FLOOR:\n' +
  //           '- Light gray commercial vinyl/concrete (#C5C5C5 to #D3D3D3)\n' +
  //           '- Matte to slight sheen\n' +
  //           '- Clean, modern\n' +
  //           '\n' +
  //           'WALLS (3 visible):\n' +
  //           '\n' +
  //           'BACK WALL (behind subjects):\n' +
  //           '- FULL-LENGTH MIRROR (floor to ceiling)\n' +
  //           '- Reflects BACK VIEW of both subjects\n' +
  //           '- Shows: back of heads, shoulders, backs\n' +
  //           '- Realistic glass mirror quality\n' +
  //           '- Standard elevator mirror\n' +
  //           '\n' +
  //           'LEFT WALL:\n' +
  //           '- Dark charcoal gray (#3A4A5A)\n' +
  //           '- Matte painted surface\n' +
  //           '- Flat, simple\n' +
  //           '\n' +
  //           'RIGHT WALL:\n' +
  //           '- Dark charcoal gray (same as left)\n' +
  //           '- ONE horizontal brushed steel handrail\n' +
  //           '- Matte painted surface\n' +
  //           '\n' +
  //           'FRONT WALL (doors):\n' +
  //           '- Not visible (outside frame from overhead angle)\n' +
  //           '\n' +
  //           'LIGHTING:\n' +
  //           '- LED ceiling lights, 4500K cool white\n' +
  //           '- Even overhead distribution\n' +
  //           '- Soft shadows beneath subjects\n' +
  //           '- Standard elevator lighting (not dramatic)\n' +
  //           '\n' +
  //           'MUST BE REAL: Office building elevator. NOT futuristic, NOT CGI, REAL.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 3: ASSEMBLY USING LOCKED DNA\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN - Use ONLY locked DNA (NO generic features):\n' +
  //           '\n' +
  //           'FACE:\n' +
  //           '- Install EXACT eye geometry + pigmentation from DNA\n' +
  //           '- Install EXACT nose architecture from DNA (ALL dimensions)\n' +
  //           '- Install EXACT lip morphology from DNA\n' +
  //           '- Install EXACT facial geometry from DNA (shape, jaw, chin)\n' +
  //           '- Install EXACT bone structure from DNA\n' +
  //           '- Install EXACT skin parameters from DNA\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- Install EXACT pigmentation from DNA (PRECISE shade, NOT category)\n' +
  //           '- Style: Medium length, swept back, textured\n' +
  //           '\n' +
  //           'FACIAL HAIR:\n' +
  //           '- Install EXACT pattern from DNA (style, coverage, density, color - ALL exact)\n' +
  //           '\n' +
  //           'OUTFIT:\n' +
  //           '- Black suit jacket (tailored)\n' +
  //           '- White or light blue shirt\n' +
  //           '- Open collar\n' +
  //           '- Black dress shoes\n' +
  //           '\n' +
  //           'POSITION:\n' +
  //           '- Right-of-center\n' +
  //           '- Facing forward/slightly toward woman\n' +
  //           '- Head tilted up, looking at ceiling camera\n' +
  //           '- Serious, intense upward gaze\n' +
  //           '- Confident, upright posture\n' +
  //           '- Back/shoulders visible in mirror reflection\n' +
  //           '\n' +
  //           'WOMAN - Use ONLY locked DNA (NO generic features):\n' +
  //           '\n' +
  //           'FACE:\n' +
  //           '- Install EXACT eye geometry + pigmentation from DNA\n' +
  //           '- Install EXACT nose architecture from DNA (ALL dimensions)\n' +
  //           '- Install EXACT lip morphology from DNA\n' +
  //           '- Install EXACT facial geometry from DNA (shape, jaw, chin)\n' +
  //           '- Install EXACT bone structure from DNA\n' +
  //           '- Install EXACT skin parameters from DNA\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- Install EXACT pigmentation from DNA (PRECISE shade, NOT "dark")\n' +
  //           '- Style: Long, straight, sleek with blunt bangs\n' +
  //           '- Past shoulders, smooth\n' +
  //           '\n' +
  //           'OUTFIT:\n' +
  //           '- Black sleeveless dress or top\n' +
  //           '- Form-fitting, sophisticated\n' +
  //           '- Bare shoulders\n' +
  //           '- Black shoes\n' +
  //           '\n' +
  //           'POSITION:\n' +
  //           '- Left-of-center, slightly forward of man\n' +
  //           '- Facing forward\n' +
  //           '- Head tilted up, looking at ceiling camera\n' +
  //           '- Soft, serene upward gaze\n' +
  //           '- Graceful, elegant posture\n' +
  //           '- Back with long hair visible in mirror reflection\n' +
  //           '\n' +
  //           'SPACING: 30-40cm gap between them, centered as pair\n' +
  //           '\n' +
  //           '====================\n' +
  //           'VERIFICATION - ALL MUST BE "YES"\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN\'S IDENTITY:\n' +
  //           '☐ Eyes: shape EXACTLY matches DNA?\n' +
  //           '☐ Eyes: color EXACTLY matches DNA (specific shade)?\n' +
  //           '☐ Nose: ALL dimensions EXACTLY match DNA?\n' +
  //           '☐ Lips: EXACTLY match DNA?\n' +
  //           '☐ Face shape: EXACTLY matches DNA?\n' +
  //           '☐ Jaw: EXACTLY matches DNA?\n' +
  //           '☐ Facial hair: style, coverage, density, color ALL EXACTLY match DNA?\n' +
  //           '☐ Hair color: EXACTLY matches DNA (precise shade, not approximation)?\n' +
  //           '☐ Skin tone: EXACTLY matches DNA?\n' +
  //           '☐ Proportions: ratios match DNA?\n' +
  //           '☐ TEST: Would his mother say "That\'s him" instantly?\n' +
  //           '\n' +
  //           'WOMAN\'S IDENTITY:\n' +
  //           '☐ Eyes: shape EXACTLY matches DNA?\n' +
  //           '☐ Eyes: color EXACTLY matches DNA (specific shade)?\n' +
  //           '☐ Nose: ALL dimensions EXACTLY match DNA?\n' +
  //           '☐ Lips: EXACTLY match DNA?\n' +
  //           '☐ Face shape: EXACTLY matches DNA?\n' +
  //           '☐ Jaw/chin: EXACTLY match DNA?\n' +
  //           '☐ Cheekbones: EXACTLY match DNA?\n' +
  //           '☐ Hair color: EXACTLY matches DNA (precise shade, not "dark")?\n' +
  //           '☐ Skin tone: EXACTLY matches DNA?\n' +
  //           '☐ Proportions: ratios match DNA?\n' +
  //           '☐ TEST: Would her mother say "That\'s her" instantly?\n' +
  //           '\n' +
  //           'MIRROR:\n' +
  //           '☐ Full-length mirror on back wall?\n' +
  //           '☐ Clear reflections of both subjects\' backs?\n' +
  //           '☐ Back of heads visible?\n' +
  //           '☐ Realistic glass mirror quality?\n' +
  //           '\n' +
  //           'ELEVATOR REALISM:\n' +
  //           '☐ Looks like REAL photo in REAL elevator?\n' +
  //           '☐ Light gray floor?\n' +
  //           '☐ Dark walls?\n' +
  //           '☐ Standard LED lighting?\n' +
  //           '☐ NOT CGI/artificial?\n' +
  //           '\n' +
  //           'CAMERA:\n' +
  //           '☐ Overhead angle (90° straight down)?\n' +
  //           '☐ Both subjects visible?\n' +
  //           '☐ Sharp focus on faces?\n' +
  //           '\n' +
  //           'IF ANY = NO → FAILED. REGENERATE USING EXACT DNA.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'EXECUTION PROTOCOL\n' +
  //           '====================\n' +
  //           '\n' +
  //           '1. Study man\'s face 30sec → extract DNA → LOCK\n' +
  //           '2. Study woman\'s face 30sec → extract DNA → LOCK\n' +
  //           '3. Answer pre-generation test (verify knowledge)\n' +
  //           '4. Build man using ONLY his locked DNA\n' +
  //           '5. Build woman using ONLY her locked DNA\n' +
  //           '6. Position in elevator\n' +
  //           '7. Add mirror with reflections\n' +
  //           '8. Run verification checklist\n' +
  //           '9. All YES → finalize / Any NO → regenerate\n' +
  //           '\n' +
  //           '====================\n' +
  //           'CRITICAL RULES\n' +
  //           '====================\n' +
  //           '\n' +
  //           '1. HAIR COLORS: EXACT shades from DNA (not categories - EXACT identified tones)\n' +
  //           '2. FACIAL HAIR: EXACT style, coverage, density, color from DNA\n' +
  //           '3. FEATURES: EXACT shapes from DNA (not "similar" - EXACT)\n' +
  //           '4. PROPORTIONS: EXACT ratios from DNA\n' +
  //           '5. MIRROR: Mandatory, must show back reflections\n' +
  //           '6. REALISM: Must look like REAL elevator photo\n' +
  //           '\n' +
  //           'This is IDENTITY TRANSPLANT, not similarity creation.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'OUTPUT\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Overhead photograph (90° bird\'s eye): Man and woman standing in modern elevator with mirrored back wall, light gray floor, dark walls, cool LED lighting, both looking up at camera, professional quality, 8K.\n' +
  //           '\n' +
  //           'BOTH people: 100% EXACT match to inputs - facial recognition must confirm same individuals.\n' +
  //           '\n' +
  //           'ZERO TOLERANCE FOR DEVIATION.\n' +
  //           'EXACT DNA REPLICATION REQUIRED.\n' +
  //           'MIRROR WITH REFLECTIONS MANDATORY.\n' +
  //           'REAL ELEVATOR AESTHETIC REQUIRED.',
  //       name: 'История любви',
  //       photoMode: 'couple',
  //       preset: { id: 'love_story', name: 'История любви' },
  //     },
  //     {
  //       id: 'sweet_moment',
  //       image: 'https://i.imgur.com/naZItyw.jpeg',
  //       prompt: 'ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION\n' +
  //           '\n' +
  //           'INPUT: Two separate images - one man, one woman\n' +
  //           'OUTPUT: One elegant couple portrait of these EXACT two people\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 1: FACIAL DNA EXTRACTION (MANDATORY - 60 SECONDS TOTAL)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'BEFORE generating ANYTHING, extract and LOCK facial DNA from BOTH inputs:\n' +
  //           '\n' +
  //           'MAN\'S FACIAL DNA - Study his face for 30 seconds, extract EXACT:\n' +
  //           '\n' +
  //           '1. Eye geometry: \n' +
  //           '   - Shape: [round? almond? hooded? deep-set? - EXACT contour]\n' +
  //           '   - Size: [small/medium/large relative to face]\n' +
  //           '   - Spacing: [close-set? wide-set? measure exact distance]\n' +
  //           '   - Color: [NOT "blue/brown" - EXACT shade: light blue? gray-blue? hazel? dark brown?]\n' +
  //           '   - Eyelid: [monolid? double? hooded? exact type]\n' +
  //           '\n' +
  //           '2. Nose architecture:\n' +
  //           '   - Bridge width: [narrow? medium? wide? - EXACT]\n' +
  //           '   - Bridge height: [low? medium? high?]\n' +
  //           '   - Nostril shape: [round? oval? flared? - EXACT]\n' +
  //           '   - Tip shape: [bulbous? pointed? button? upturned? straight? - EXACT]\n' +
  //           '   - Overall length: [short? medium? long? - EXACT]\n' +
  //           '\n' +
  //           '3. Lip morphology:\n' +
  //           '   - Upper lip: [thin? medium? full? - EXACT thickness]\n' +
  //           '   - Lower lip: [thin? medium? full? - EXACT thickness]\n' +
  //           '   - Ratio: [upper:lower proportion - EXACT]\n' +
  //           '   - Width: [narrow? medium? wide? - EXACT]\n' +
  //           '   - Cupid\'s bow: [defined? soft? flat? - EXACT]\n' +
  //           '\n' +
  //           '4. Facial geometry:\n' +
  //           '   - Shape: [square? oval? rectangular? round? long? - EXACT]\n' +
  //           '   - Jaw: [sharp 90°? soft rounded? strong? delicate? - EXACT angle]\n' +
  //           '   - Chin: [pointed? rounded? square? prominent? recessed? - EXACT]\n' +
  //           '   - Width: [narrow? medium? wide? - EXACT]\n' +
  //           '\n' +
  //           '5. Bone structure:\n' +
  //           '   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]\n' +
  //           '   - Face contours: [angular? soft? - EXACT]\n' +
  //           '\n' +
  //           '6. Skin parameters:\n' +
  //           '   - Tone: [very fair? fair? light? medium? tan? olive? dark? - EXACT shade]\n' +
  //           '   - Undertone: [warm/golden? cool/pink? neutral? - EXACT]\n' +
  //           '   - Texture: [smooth? some texture? visible pores?]\n' +
  //           '\n' +
  //           '7. Hair pigmentation:\n' +
  //           '   - Color: [NOT "brown/blonde" - EXACT: light brown? medium brown? dark brown? dirty blonde? ash blonde? golden blonde? with what undertones? warm? cool?]\n' +
  //           '   - Style: [buzzed? short crop? textured? length?]\n' +
  //           '   - Texture: [straight? wavy? thick? fine?]\n' +
  //           '\n' +
  //           '8. Facial hair pattern:\n' +
  //           '   - Style: [clean-shaven? stubble? short beard? full beard? goatee? - EXACT]\n' +
  //           '   - Coverage: [just chin? full face? mustache? - EXACT areas]\n' +
  //           '   - Length: [5 o\'clock shadow? 3mm? 1cm? - EXACT]\n' +
  //           '   - Density: [sparse? medium? thick? - EXACT]\n' +
  //           '   - Color: [same as hair? darker? lighter? graying? - EXACT]\n' +
  //           '\n' +
  //           '9. Distinguishing marks:\n' +
  //           '   - Moles, scars, asymmetries: [note EXACT locations]\n' +
  //           '\n' +
  //           '10. Proportions (measure ratios):\n' +
  //           '    - Eye spacing ÷ face width = [ratio]\n' +
  //           '    - Nose width ÷ face width = [ratio]\n' +
  //           '    - Face length ÷ face width = [ratio]\n' +
  //           '\n' +
  //           'WOMAN\'S FACIAL DNA - Study her face for 30 seconds, extract EXACT:\n' +
  //           '\n' +
  //           '1. Eye geometry:\n' +
  //           '   - Shape: [round? almond? cat-eye? upturned? downturned? - EXACT]\n' +
  //           '   - Size: [small/medium/large relative to face]\n' +
  //           '   - Spacing: [close? medium? wide? - EXACT]\n' +
  //           '   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? hazel? green? amber?]\n' +
  //           '   - Eyelid: [monolid? double? hooded? - EXACT]\n' +
  //           '\n' +
  //           '2. Nose architecture:\n' +
  //           '   - Bridge width: [narrow? medium? wide? - EXACT]\n' +
  //           '   - Nostril shape: [round? oval? tight? - EXACT]\n' +
  //           '   - Tip: [button? straight? upturned? pointed? - EXACT]\n' +
  //           '   - Length: [short? medium? long? - EXACT]\n' +
  //           '\n' +
  //           '3. Lip morphology:\n' +
  //           '   - Upper lip: [thin? medium? full? - EXACT]\n' +
  //           '   - Lower lip: [thin? medium? full? - EXACT]\n' +
  //           '   - Fullness ratio: [upper:lower - EXACT]\n' +
  //           '   - Cupid\'s bow: [sharp? soft? undefined? - EXACT]\n' +
  //           '   - Width: [narrow? medium? wide? - EXACT]\n' +
  //           '\n' +
  //           '4. Facial geometry:\n' +
  //           '   - Shape: [oval? heart? diamond? round? square? - EXACT]\n' +
  //           '   - Jaw: [soft? defined? angular? delicate? - EXACT]\n' +
  //           '   - Chin: [pointed? rounded? small? prominent? - EXACT]\n' +
  //           '\n' +
  //           '5. Bone structure:\n' +
  //           '   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT]\n' +
  //           '   - Position: [where exactly on face?]\n' +
  //           '\n' +
  //           '6. Skin parameters:\n' +
  //           '   - Tone: [fair? light? medium? olive? tan? - EXACT shade]\n' +
  //           '   - Undertone: [warm? cool? neutral? - EXACT]\n' +
  //           '\n' +
  //           '7. Hair pigmentation:\n' +
  //           '   - Color: [NOT "dark" - EXACT: jet black? dark brown? medium brown? with cool tones? warm tones?]\n' +
  //           '   - Texture: [straight? wavy? curly? fine? thick?]\n' +
  //           '   - Length: [short? medium? long? shoulder-length?]\n' +
  //           '\n' +
  //           '8. Distinguishing marks:\n' +
  //           '   - Moles, dimples, asymmetries: [EXACT locations]\n' +
  //           '\n' +
  //           '9. Proportions (measure ratios):\n' +
  //           '   - Eye spacing ÷ face width = [ratio]\n' +
  //           '   - Nose width ÷ face width = [ratio]\n' +
  //           '   - Face length ÷ face width = [ratio]\n' +
  //           '\n' +
  //           'CRITICAL: DNA is now LOCKED. These are IMMUTABLE templates. ZERO deviation allowed.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'TEST BEFORE PROCEEDING\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Ask yourself:\n' +
  //           '1. Can I describe the man\'s EXACT eye color? (not "blue" - the specific shade)\n' +
  //           '2. Can I describe the man\'s EXACT nose shape? (not "normal" - the specific structure)\n' +
  //           '3. Can I describe the man\'s EXACT facial hair? (not "beard" - the specific style, length, coverage)\n' +
  //           '4. Can I describe the man\'s EXACT hair color? (not "brown" - the specific shade with undertones)\n' +
  //           '5. Can I describe the woman\'s EXACT eye shape? (not "almond" - the specific contour)\n' +
  //           '6. Can I describe the woman\'s EXACT hair color? (not "dark" - the specific shade)\n' +
  //           '\n' +
  //           'If ANY answer is "no" or "approximately" → STUDY INPUTS AGAIN. Do NOT proceed.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 2: SCENE CONSTRUCTION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'BACKGROUND: Dark charcoal to black gradient (#1A1A1A to #0D0D0D), professional studio backdrop\n' +
  //           '\n' +
  //           'LIGHTING: \n' +
  //           '- Main: Soft beauty light front-left 45°\n' +
  //           '- Fill: Gentle right fill\n' +
  //           '- Rim: Subtle edge light\n' +
  //           '- Temperature: Warm-neutral (3200-3800K)\n' +
  //           '- Effect: Flattering, editorial, catchlights in eyes\n' +
  //           '\n' +
  //           'CAMERA: 85mm portrait lens, f/2.0-2.8, portrait orientation, waist-up framing\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 3: ASSEMBLY USING LOCKED DNA (NOT APPROXIMATION)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN CONSTRUCTION:\n' +
  //           '\n' +
  //           'FACE - Use ONLY locked DNA (NO generic features):\n' +
  //           '- Eyes: Install EXACT geometry + EXACT pigmentation from DNA\n' +
  //           '- Nose: Install EXACT architecture from DNA (bridge, tip, nostrils - ALL dimensions)\n' +
  //           '- Lips: Install EXACT morphology from DNA\n' +
  //           '- Face: Install EXACT geometry from DNA (shape, jaw, chin)\n' +
  //           '- Bones: Install EXACT structure from DNA (cheekbones)\n' +
  //           '- Skin: Install EXACT parameters from DNA (tone, undertone)\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- Install EXACT pigmentation from DNA (the PRECISE shade identified, NOT approximation)\n' +
  //           '- Style: Short, groomed, professional\n' +
  //           '\n' +
  //           'FACIAL HAIR:\n' +
  //           '- Install EXACT pattern from DNA (style, coverage, length, density, color - ALL exact)\n' +
  //           '\n' +
  //           'OUTFIT:\n' +
  //           '- Black pinstripe suit (thin stripes)\n' +
  //           '- Black shirt underneath\n' +
  //           '- Silver chain necklace (medium, visible at neck)\n' +
  //           '- Silver bracelet\n' +
  //           '- Polished, sophisticated\n' +
  //           '\n' +
  //           'POSE:\n' +
  //           '- Right side of frame\n' +
  //           '- Right arm around woman\'s waist\n' +
  //           '- Left hand holding woman\'s hand\n' +
  //           '- Looking at camera\n' +
  //           '- Confident, warm expression\n' +
  //           '\n' +
  //           'WOMAN CONSTRUCTION:\n' +
  //           '\n' +
  //           'FACE - Use ONLY locked DNA (NO generic features):\n' +
  //           '- Eyes: Install EXACT geometry + EXACT pigmentation from DNA\n' +
  //           '- Nose: Install EXACT architecture from DNA (ALL dimensions)\n' +
  //           '- Lips: Install EXACT morphology from DNA (shape, fullness, cupid\'s bow)\n' +
  //           '- Face: Install EXACT geometry from DNA (shape, jaw, chin)\n' +
  //           '- Bones: Install EXACT structure from DNA (cheekbones exact position)\n' +
  //           '- Skin: Install EXACT parameters from DNA (tone, undertone)\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- Install EXACT pigmentation from DNA (the PRECISE shade identified, NOT "dark")\n' +
  //           '- Style: Long, voluminous waves over left shoulder\n' +
  //           '- Glossy, healthy, professional styling\n' +
  //           '\n' +
  //           'MAKEUP:\n' +
  //           '- Professional glam\n' +
  //           '- Defined eyes, groomed brows\n' +
  //           '- Natural nude lip with gloss\n' +
  //           '- Glowing skin, subtle highlight\n' +
  //           '\n' +
  //           'JEWELRY:\n' +
  //           '- Large crystal/diamond chandelier earrings\n' +
  //           '- Delicate necklace (optional)\n' +
  //           '- Bracelet, rings (optional)\n' +
  //           '\n' +
  //           'OUTFIT:\n' +
  //           '- Black lace overlay dress\n' +
  //           '- Strapless/off-shoulder\n' +
  //           '- Nude underlayer visible through lace\n' +
  //           '- Elegant, form-fitting, glamorous\n' +
  //           '\n' +
  //           'POSE:\n' +
  //           '- Left side of frame\n' +
  //           '- Body turned toward man (3/4 back)\n' +
  //           '- Looking over left shoulder at camera\n' +
  //           '- Right arm around man\'s torso\n' +
  //           '- Left hand holding man\'s hand\n' +
  //           '- Soft, elegant, confident expression\n' +
  //           '\n' +
  //           'COUPLE DYNAMICS:\n' +
  //           '- Bodies touching, intimate embrace\n' +
  //           '- Man\'s arm around woman\n' +
  //           '- Hands clasped at waist\n' +
  //           '- Woman\'s head turned back to camera\n' +
  //           '- Natural, comfortable intimacy\n' +
  //           '- Balanced composition\n' +
  //           '\n' +
  //           '====================\n' +
  //           'VERIFICATION - EVERY ITEM MUST BE "YES"\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN\'S IDENTITY:\n' +
  //           '☐ Eyes: shape EXACTLY matches locked DNA?\n' +
  //           '☐ Eyes: color EXACTLY matches locked DNA (the specific shade)?\n' +
  //           '☐ Nose: ALL dimensions EXACTLY match locked DNA?\n' +
  //           '☐ Lips: shape and size EXACTLY match locked DNA?\n' +
  //           '☐ Face shape: EXACTLY matches locked DNA?\n' +
  //           '☐ Jaw angle: EXACTLY matches locked DNA?\n' +
  //           '☐ Chin: EXACTLY matches locked DNA?\n' +
  //           '☐ Cheekbones: position EXACTLY matches locked DNA?\n' +
  //           '☐ Facial hair: style, coverage, length, color ALL EXACTLY match locked DNA?\n' +
  //           '☐ Hair color: EXACTLY matches locked DNA (the precise shade, not category)?\n' +
  //           '☐ Skin tone: EXACTLY matches locked DNA?\n' +
  //           '☐ Proportions: eye spacing, nose width, all ratios match locked DNA?\n' +
  //           '☐ TEST: Would his mother say "That\'s him" instantly (not "looks like him")?\n' +
  //           '\n' +
  //           'WOMAN\'S IDENTITY:\n' +
  //           '☐ Eyes: shape EXACTLY matches locked DNA?\n' +
  //           '☐ Eyes: color EXACTLY matches locked DNA (the specific shade)?\n' +
  //           '☐ Nose: ALL dimensions EXACTLY match locked DNA?\n' +
  //           '☐ Lips: shape, fullness, cupid\'s bow EXACTLY match locked DNA?\n' +
  //           '☐ Face shape: EXACTLY matches locked DNA?\n' +
  //           '☐ Jaw/chin: EXACTLY match locked DNA?\n' +
  //           '☐ Cheekbones: position EXACTLY matches locked DNA?\n' +
  //           '☐ Hair color: EXACTLY matches locked DNA (the precise shade, not "dark")?\n' +
  //           '☐ Skin tone: EXACTLY matches locked DNA?\n' +
  //           '☐ Proportions: all ratios match locked DNA?\n' +
  //           '☐ TEST: Would her mother say "That\'s her" instantly (not "looks like her")?\n' +
  //           '\n' +
  //           'COMPOSITION:\n' +
  //           '☐ Man in pinstripe suit + chain necklace?\n' +
  //           '☐ Woman in lace dress + chandelier earrings?\n' +
  //           '☐ Dark background?\n' +
  //           '☐ Intimate embrace pose?\n' +
  //           '☐ Woman looking over shoulder?\n' +
  //           '☐ Professional lighting?\n' +
  //           '\n' +
  //           'IF ANY ANSWER IS "NO" → FAILED. REGENERATE USING EXACT LOCKED DNA.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'EXECUTION PROTOCOL\n' +
  //           '====================\n' +
  //           '\n' +
  //           '1. Study man\'s face 30 sec → extract DNA → LOCK\n' +
  //           '2. Study woman\'s face 30 sec → extract DNA → LOCK\n' +
  //           '3. Verify you can describe EXACT features (not approximations)\n' +
  //           '4. Build man using ONLY his locked DNA\n' +
  //           '5. Build woman using ONLY her locked DNA\n' +
  //           '6. Position couple\n' +
  //           '7. Run verification checklist\n' +
  //           '8. If all YES → finalize\n' +
  //           '9. If any NO → regenerate with EXACT DNA copying\n' +
  //           '\n' +
  //           '====================\n' +
  //           'CRITICAL RULES\n' +
  //           '====================\n' +
  //           '\n' +
  //           '1. HAIR COLORS: Use EXACT shades from DNA (not categories - EXACT identified tones)\n' +
  //           '2. FACIAL HAIR: Use EXACT style, coverage, length, color from DNA\n' +
  //           '3. FEATURES: Use EXACT shapes from DNA (not "similar" - EXACT)\n' +
  //           '4. PROPORTIONS: Use EXACT ratios from DNA measurements\n' +
  //           '5. This is TRANSPLANT not SIMILARITY - same people in new photo\n' +
  //           '\n' +
  //           '====================\n' +
  //           'OUTPUT\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Professional editorial portrait: Man (right) and woman (left) in elegant couple embrace, dark studio background, man in pinstripe suit with chain, woman in lace dress with chandelier earrings, warm studio lighting, 8K quality.\n' +
  //           '\n' +
  //           'BOTH people: 100% EXACT identity match to inputs - facial recognition must confirm same individuals.\n' +
  //           '\n' +
  //           'ZERO TOLERANCE FOR DEVIATION.\n' +
  //           'EXACT DNA REPLICATION REQUIRED.и',
  //       name: 'Нежный момент',
  //       photoMode: 'couple',
  //       preset: { id: 'sweet_moment', name: 'Нежный момент' },
  //     },
  //     {
  //       id: 'dreamy_pink',
  //       name: 'День влюбленных',
  //       image: 'https://i.imgur.com/BPtlUnw.jpeg',
  //       prompt: 'EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION\n' +
  //           '\n' +
  //           'YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.\n' +
  //           'YOUR ONLY JOB: COPY THE EXACT FACES FROM INPUT INTO NEW PHOTO.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT\'S EXPLICITLY LISTED\n' +
  //           '====================\n' +
  //           '\n' +
  //           'INPUT: Two separate images - one woman, one man\n' +
  //           'OUTPUT: Valentine\'s/Cupid-themed couple photoshoot with these EXACT two people\n' +
  //           '\n' +
  //           'WHAT CHANGES (ONLY THESE):\n' +
  //           '1. Setting → pink draped backdrop studio\n' +
  //           '2. Costumes → woman as Cupid (pink corset, angel wings), man in black suit\n' +
  //           '3. Props → Cupid\'s bow and arrow with heart\n' +
  //           '4. Pose → playful Valentine\'s theme interaction\n' +
  //           '\n' +
  //           'WHAT NEVER CHANGES (EVERYTHING ELSE):\n' +
  //           '- EVERY facial feature of BOTH people\n' +
  //           '- EVERY hair COLOR characteristic of BOTH people\n' +
  //           '- EVERY skin characteristic of BOTH people\n' +
  //           '- EVERY unique detail of BOTH people\n' +
  //           '\n' +
  //           'IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN\'T CHANGE\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 1: FACE EXTRACTION FOR BOTH PEOPLE (MANDATORY)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'STEP 1: Open BOTH input images. Study each face for 30 seconds.\n' +
  //           '\n' +
  //           'FOR THE WOMAN - LOCK THESE EXACT FEATURES:\n' +
  //           '- Exact eye shape, color, size, spacing, eyelid structure\n' +
  //           '- Exact eyebrow shape, thickness, color, arch\n' +
  //           '- Exact nose bridge, nostril shape, tip, length\n' +
  //           '- Exact lip shape, fullness, cupid\'s bow, width\n' +
  //           '- Exact face shape, jaw, chin\n' +
  //           '- Exact cheekbone position and prominence\n' +
  //           '- EXACT skin tone and undertone\n' +
  //           '- EXACT hair color (not "dark" - the PRECISE shade: black? Dark brown? Cool/warm tones?)\n' +
  //           '- Hair texture and characteristics\n' +
  //           '- Any unique marks or features\n' +
  //           '\n' +
  //           'FOR THE MAN - LOCK THESE EXACT FEATURES:\n' +
  //           '- Exact eye shape, color, size, spacing, eyelid structure\n' +
  //           '- Exact eyebrow shape, thickness, color\n' +
  //           '- Exact nose bridge, nostril shape, tip, length\n' +
  //           '- Exact lip shape, fullness, width\n' +
  //           '- Exact face shape, jaw, chin\n' +
  //           '- Exact cheekbone position\n' +
  //           '- EXACT skin tone and undertone\n' +
  //           '- EXACT hair color (the PRECISE shade)\n' +
  //           '- Hair texture, style, hairline\n' +
  //           '- Facial hair (beard, stubble, clean-shaven - EXACT style from input)\n' +
  //           '- Any unique marks or features\n' +
  //           '\n' +
  //           'CRITICAL: Both people\'s features are now LOCKED. NO CHANGES ALLOWED.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 2: SCENE CONSTRUCTION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'SETTING - VALENTINE\'S STUDIO:\n' +
  //           '\n' +
  //           'BACKGROUND:\n' +
  //           '- Pink draped curtain/fabric backdrop\n' +
  //           '- Soft blush pink to rose pink gradient\n' +
  //           '- Fabric has vertical draping/folds\n' +
  //           '- Creates romantic, dreamy atmosphere\n' +
  //           '- Studio photography setup\n' +
  //           '- Clean, simple, focuses attention on subjects\n' +
  //           '\n' +
  //           'LIGHTING:\n' +
  //           '- Professional studio lighting\n' +
  //           '- Soft, even illumination\n' +
  //           '- Creates slight shadows in fabric draping\n' +
  //           '- Warm-neutral color temperature (3500-4000K)\n' +
  //           '- Flattering, romantic lighting\n' +
  //           '- No harsh shadows on subjects\n' +
  //           '\n' +
  //           'FLOOR/BASE:\n' +
  //           '- Light pink or white seamless floor\n' +
  //           '- Studio backdrop continuation\n' +
  //           '- Clean, professional\n' +
  //           '\n' +
  //           'ATMOSPHERE:\n' +
  //           '- Playful, romantic, Valentine\'s Day theme\n' +
  //           '- Fun, lighthearted, whimsical\n' +
  //           '- Cupid and Valentine concept\n' +
  //           '- Professional themed photoshoot\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 3: SUBJECTS ASSEMBLY (USING LOCKED FEATURES)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'WOMAN CONSTRUCTION (CUPID):\n' +
  //           '\n' +
  //           'FACE ASSEMBLY - Use ONLY extracted features from woman\'s input:\n' +
  //           '- Install EXACT eyes (shape, color, spacing)\n' +
  //           '- Install EXACT nose (all dimensions)\n' +
  //           '- Install EXACT lips (shape, fullness)\n' +
  //           '- Install EXACT face shape, jaw, chin\n' +
  //           '- Install EXACT cheekbones\n' +
  //           '- Install EXACT skin tone\n' +
  //           '- Install EXACT eyebrows\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- COLOR: EXACT color from woman\'s input (DO NOT CHANGE - if black, stay black; if dark brown, stay exact shade)\n' +
  //           '- Style: Long, flowing, wavy\n' +
  //           '- Parted in center or slightly off-center\n' +
  //           '- Falls over shoulders with volume and movement\n' +
  //           '- Styled with soft waves or natural texture\n' +
  //           '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
  //           '\n' +
  //           'MAKEUP:\n' +
  //           '- Romantic, feminine\n' +
  //           '- Soft pink eyeshadow tones\n' +
  //           '- Defined lashes\n' +
  //           '- Rosy blush on cheeks\n' +
  //           '- Pink or rose-toned lips with gloss\n' +
  //           '- Fresh, pretty, Valentine\'s aesthetic\n' +
  //           '\n' +
  //           'COSTUME - CUPID OUTFIT:\n' +
  //           '\n' +
  //           'CORSET:\n' +
  //           '- Pink satin or silk corset\n' +
  //           '- Sweetheart neckline with structured cups\n' +
  //           '- Lace-up front detail (ribbon lacing down center)\n' +
  //           '- Boned/structured for shape\n' +
  //           '- Romantic, feminine, lingerie-inspired\n' +
  //           '\n' +
  //           'SKIRT:\n' +
  //           '- White ruffled mini skirt\n' +
  //           '- Tiered pleated layers\n' +
  //           '- Short length (mini)\n' +
  //           '- Fluffy, voluminous ruffles\n' +
  //           '- Ballet/tutu-inspired\n' +
  //           '\n' +
  //           'ACCESSORIES:\n' +
  //           '- White thigh-high stockings\n' +
  //           '- Pearl choker necklace (multiple strands)\n' +
  //           '- White or light-colored heels/pumps\n' +
  //           '- Large white feathered ANGEL WINGS on back\n' +
  //           '- Wings spread out behind her\n' +
  //           '\n' +
  //           'ANGEL WINGS:\n' +
  //           '- Large white feathered wings\n' +
  //           '- Attached to back/shoulders\n' +
  //           '- Spread wide creating dramatic silhouette\n' +
  //           '- Realistic feather texture\n' +
  //           '- Classic angel wing design\n' +
  //           '\n' +
  //           'CUPID PROP:\n' +
  //           '- White/silver Cupid\'s bow (archery bow)\n' +
  //           '- White feathered arrow\n' +
  //           '- Red heart attached to arrow tip\n' +
  //           '- Held in hands as if shooting\n' +
  //           '\n' +
  //           'WOMAN\'S POSE:\n' +
  //           '- Standing position\n' +
  //           '- One leg slightly forward/raised\n' +
  //           '- Playful, flirtatious stance\n' +
  //           '- Looking down at man with smile\n' +
  //           '- Holding bow and arrow aimed playfully at man\n' +
  //           '- Dynamic, energetic pose\n' +
  //           '- Confident, fun expression\n' +
  //           '\n' +
  //           'MAN CONSTRUCTION:\n' +
  //           '\n' +
  //           'FACE ASSEMBLY - Use ONLY extracted features from man\'s input:\n' +
  //           '- Install EXACT eyes (shape, color, spacing)\n' +
  //           '- Install EXACT nose (all dimensions)\n' +
  //           '- Install EXACT lips (shape, fullness)\n' +
  //           '- Install EXACT face shape, jaw, chin\n' +
  //           '- Install EXACT cheekbones\n' +
  //           '- Install EXACT skin tone\n' +
  //           '- Install EXACT eyebrows\n' +
  //           '- Install EXACT facial hair (if present in input)\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- COLOR: EXACT color from man\'s input (DO NOT CHANGE)\n' +
  //           '- Style: Neat, groomed, professional\n' +
  //           '- Styled appropriately for formal look\n' +
  //           '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
  //           '\n' +
  //           'OUTFIT - FORMAL SUIT:\n' +
  //           '\n' +
  //           'SUIT:\n' +
  //           '- Black tailored suit\n' +
  //           '- Classic fit, professional\n' +
  //           '- Suit jacket and trousers\n' +
  //           '\n' +
  //           'SHIRT:\n' +
  //           '- White dress shirt\n' +
  //           '- Crisp, clean\n' +
  //           '- Collar visible\n' +
  //           '- No tie or open collar\n' +
  //           '\n' +
  //           'SHOES:\n' +
  //           '- Black dress shoes\n' +
  //           '- Formal, polished\n' +
  //           '\n' +
  //           'MAN\'S POSE:\n' +
  //           '- Sitting/kneeling on floor\n' +
  //           '- Looking up at woman\n' +
  //           '- Positioned lower than woman (she\'s standing, he\'s sitting/kneeling)\n' +
  //           '- Engaged, looking at her with interest\n' +
  //           '- Relaxed but attentive posture\n' +
  //           '- Leaning back slightly on one arm\n' +
  //           '- Legs extended or crossed casually\n' +
  //           '\n' +
  //           'INTERACTION & DYNAMICS:\n' +
  //           '- Woman standing above/over man\n' +
  //           '- She\'s playfully aiming Cupid\'s arrow at him\n' +
  //           '- He\'s looking up at her admiringly\n' +
  //           '- Fun, flirtatious, romantic dynamic\n' +
  //           '- Valentine\'s Day "Cupid shooting arrow of love" concept\n' +
  //           '- Lighthearted, playful energy between them\n' +
  //           '\n' +
  //           'CAMERA & TECHNICAL:\n' +
  //           '\n' +
  //           'FRAMING:\n' +
  //           '- Portrait orientation (vertical)\n' +
  //           '- Full body shot showing both subjects\n' +
  //           '- Woman in upper portion, man in lower portion\n' +
  //           '- Composition shows height difference (she standing, he sitting)\n' +
  //           '- Angel wings visible spread behind woman\n' +
  //           '\n' +
  //           'CAMERA ANGLE:\n' +
  //           '- Straight-on, medium height\n' +
  //           '- Captures both subjects clearly\n' +
  //           '- Balanced composition\n' +
  //           '\n' +
  //           'FOCUS:\n' +
  //           '- Both subjects in sharp focus\n' +
  //           '- Background slightly soft\n' +
  //           '- Professional photography quality\n' +
  //           '- Clear detail on costumes and props\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 4: PRE-GENERATION CHECKLIST\n' +
  //           '====================\n' +
  //           '\n' +
  //           'FOR WOMAN:\n' +
  //           '[ ] I studied her face for 30+ seconds - YES required\n' +
  //           '[ ] I identified her EXACT hair color - YES required\n' +
  //           '[ ] I identified her EXACT facial features - YES required\n' +
  //           '[ ] I will use her EXACT features (not approximate) - YES required\n' +
  //           '\n' +
  //           'FOR MAN:\n' +
  //           '[ ] I studied his face for 30+ seconds - YES required\n' +
  //           '[ ] I identified his EXACT hair color - YES required\n' +
  //           '[ ] I identified his EXACT facial features - YES required\n' +
  //           '[ ] I identified his EXACT facial hair situation - YES required\n' +
  //           '[ ] I will use his EXACT features (not approximate) - YES required\n' +
  //           '\n' +
  //           '====================\n' +
  //           'PART 5: POST-GENERATION VERIFICATION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'WOMAN VERIFICATION:\n' +
  //           '1. Is her hair EXACTLY the same color as input? YES/NO\n' +
  //           '2. Are her eyes EXACTLY the same as input? YES/NO\n' +
  //           '3. Is her nose EXACTLY the same as input? YES/NO\n' +
  //           '4. Are her lips EXACTLY the same as input? YES/NO\n' +
  //           '5. Is her face shape EXACTLY the same as input? YES/NO\n' +
  //           '6. Is her skin tone EXACTLY the same as input? YES/NO\n' +
  //           '\n' +
  //           'MAN VERIFICATION:\n' +
  //           '7. Is his hair EXACTLY the same color as input? YES/NO\n' +
  //           '8. Are his eyes EXACTLY the same as input? YES/NO\n' +
  //           '9. Is his nose EXACTLY the same as input? YES/NO\n' +
  //           '10. Are his lips EXACTLY the same as input? YES/NO\n' +
  //           '11. Is his face shape EXACTLY the same as input? YES/NO\n' +
  //           '12. Is his facial hair EXACTLY the same as input? YES/NO\n' +
  //           '13. Is his skin tone EXACTLY the same as input? YES/NO\n' +
  //           '\n' +
  //           'COMPOSITION:\n' +
  //           '14. Pink draped backdrop? YES/NO\n' +
  //           '15. Woman in pink corset with angel wings? YES/NO\n' +
  //           '16. Woman holding Cupid bow and arrow? YES/NO\n' +
  //           '17. Man in black suit sitting/kneeling? YES/NO\n' +
  //           '18. Playful Valentine\'s interaction? YES/NO\n' +
  //           '\n' +
  //           'IDENTITY:\n' +
  //           '19. Would both people be recognized by their families? YES/NO\n' +
  //           '20. Are these the SAME two people from inputs? YES required\n' +
  //           '\n' +
  //           'If ANY answer is wrong → Regenerate with exact copying.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'FINAL DIRECTIVE\n' +
  //           '====================\n' +
  //           '\n' +
  //           'DO NOT CHANGE HAIR COLORS FOR EITHER PERSON.\n' +
  //           'DO NOT CHANGE ANY FACIAL FEATURES FOR EITHER PERSON.\n' +
  //           'This is COPYING TWO FACES, not CREATING similar people.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'COLOR GRADING\n' +
  //           '====================\n' +
  //           '\n' +
  //           '- Soft romantic pink tones\n' +
  //           '- Blush pink background\n' +
  //           '- White and pink costume elements\n' +
  //           '- Black suit contrast\n' +
  //           '- Warm, flattering skin tones\n' +
  //           '- Professional retouching maintaining natural features\n' +
  //           '- Valentine\'s/romantic aesthetic\n' +
  //           '- Playful, whimsical mood\n' +
  //           '\n' +
  //           'OUTPUT: Professional Valentine\'s themed portrait of these EXACT two people from inputs (100% identity match for both), woman as Cupid with pink corset and angel wings holding bow and arrow, man in black suit, pink draped backdrop, playful romantic interaction, 8K quality.\n' +
  //           '\n' +
  //           'ZERO TOLERANCE FOR DEVIATION.\n' +
  //           'EXACT COPY OF BOTH FACES REQUIRED.',
  //       photoMode: 'couple',
  //       preset: { id: 'dreamy_pink', name: 'Розовый сон' },
  //     },
  //     {
  //       id: 'velvet_night',
  //       name: 'Темная студия',
  //       image: 'https://i.imgur.com/smv6FJI.jpeg',
  //       prompt: 'CRITICAL: EXACT FACE TRANSPLANT - NOT SIMILARITY, BUT IDENTITY CLONING\n' +
  //           '\n' +
  //           'YOU ARE A PRECISION COPYING MACHINE.\n' +
  //           'TASK: Transplant EXACT faces from two input images into couple portrait.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'STEP 1: FORENSIC FACE ANALYSIS (60 SECONDS TOTAL)\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN\'S FACE - Study for 30 seconds, lock EXACT:\n' +
  //           '\n' +
  //           'EYES:\n' +
  //           '- Exact shape (round? almond? deep-set? hooded?)\n' +
  //           '- Exact color (blue? green? gray? hazel? brown? - PRECISE shade)\n' +
  //           '- Exact size relative to face\n' +
  //           '- Exact spacing between eyes\n' +
  //           '- Exact eyelid type\n' +
  //           '\n' +
  //           'NOSE:\n' +
  //           '- Exact bridge width (narrow? medium? wide?)\n' +
  //           '- Exact length (short? medium? long?)\n' +
  //           '- Exact tip shape (bulbous? pointed? rounded? upturned? straight?)\n' +
  //           '- Exact nostril size and shape\n' +
  //           '\n' +
  //           'LIPS:\n' +
  //           '- Exact thickness (thin? medium? full?)\n' +
  //           '- Exact width (narrow? medium? wide?)\n' +
  //           '- Exact shape when relaxed\n' +
  //           '\n' +
  //           'FACE STRUCTURE:\n' +
  //           '- Exact face shape (oval? square? rectangular? round? long?)\n' +
  //           '- Exact jaw angle (sharp 90°? soft rounded? strong defined?)\n' +
  //           '- Exact chin shape (pointed? square? rounded? recessed? prominent?)\n' +
  //           '- Exact cheekbones (high? low? prominent? subtle?)\n' +
  //           '\n' +
  //           'FACIAL HAIR:\n' +
  //           '- Exact style (clean-shaven? stubble? short beard? full beard? goatee?)\n' +
  //           '- Exact coverage area (just chin? full face? mustache?)\n' +
  //           '- Exact length and density\n' +
  //           '- Exact color (same as hair? different? darker? lighter?)\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- EXACT color (not "brown" - light brown? medium brown? dark brown? dirty blonde? ash blonde? golden blonde? - the PRECISE shade with undertones)\n' +
  //           '- Exact style (buzzed? short crop? textured? slicked? messy?)\n' +
  //           '- Exact length\n' +
  //           '\n' +
  //           'SKIN:\n' +
  //           '- Exact tone (very fair? fair? light? medium? tan? dark?)\n' +
  //           '- Exact undertone (warm/golden? cool/pink? neutral?)\n' +
  //           '\n' +
  //           'PROPORTIONS:\n' +
  //           '- Eye-to-eye distance\n' +
  //           '- Eyes-to-nose distance\n' +
  //           '- Nose-to-lips distance\n' +
  //           '- Face width-to-length ratio\n' +
  //           '\n' +
  //           'WOMAN\'S FACE - Study for 30 seconds, lock EXACT:\n' +
  //           '\n' +
  //           'EYES:\n' +
  //           '- Exact shape (round? almond? cat-eye? upturned? downturned?)\n' +
  //           '- Exact color (brown? dark brown? hazel? green? - PRECISE shade)\n' +
  //           '- Exact size relative to face\n' +
  //           '- Exact spacing between eyes\n' +
  //           '- Exact eyelid type (monolid? double? hooded?)\n' +
  //           '\n' +
  //           'NOSE:\n' +
  //           '- Exact bridge width\n' +
  //           '- Exact length\n' +
  //           '- Exact tip shape (button? straight? slightly upturned? pointed?)\n' +
  //           '- Exact nostril size and shape\n' +
  //           '\n' +
  //           'LIPS:\n' +
  //           '- Exact upper lip thickness\n' +
  //           '- Exact lower lip thickness\n' +
  //           '- Exact fullness ratio (upper vs lower)\n' +
  //           '- Exact cupid\'s bow definition\n' +
  //           '- Exact width\n' +
  //           '\n' +
  //           'FACE STRUCTURE:\n' +
  //           '- Exact face shape (oval? heart? diamond? round? square?)\n' +
  //           '- Exact jaw shape (soft? defined? angular?)\n' +
  //           '- Exact chin shape (pointed? rounded? small? prominent?)\n' +
  //           '- Exact cheekbones (high? medium? subtle? prominent?)\n' +
  //           '\n' +
  //           'HAIR:\n' +
  //           '- EXACT color (not "dark" - black? dark brown? medium brown? warm tones? cool tones? - the PRECISE shade)\n' +
  //           '- Exact texture (straight? wavy? curly?)\n' +
  //           '- Exact length\n' +
  //           '\n' +
  //           'SKIN:\n' +
  //           '- Exact tone (fair? light? medium? olive? tan?)\n' +
  //           '- Exact undertone (warm? cool? neutral?)\n' +
  //           '\n' +
  //           'PROPORTIONS:\n' +
  //           '- Eye-to-eye distance\n' +
  //           '- Eyes-to-nose distance\n' +
  //           '- Nose-to-lips distance\n' +
  //           '- Face width-to-length ratio\n' +
  //           '\n' +
  //           'CRITICAL: These features are now FROZEN. NOT ONE PIXEL can deviate.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'STEP 2: SCENE SPECIFICATION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'BACKGROUND: Pure black (#000000), studio seamless backdrop\n' +
  //           '\n' +
  //           'LIGHTING: Professional studio - main light front-left, clean, modern, neutral-cool (4500K)\n' +
  //           '\n' +
  //           'MAN - Left side of frame:\n' +
  //           '- Black crew neck t-shirt\n' +
  //           '- Black pants\n' +
  //           '- Standing upright, straight posture\n' +
  //           '- Arms at sides, relaxed\n' +
  //           '- Looking directly at camera\n' +
  //           '- Serious, confident expression\n' +
  //           '- NO TATTOOS (default - clean skin on neck and arms)\n' +
  //           '\n' +
  //           'WOMAN - Right side of frame:\n' +
  //           '- Black long-sleeve fitted top\n' +
  //           '- Black pants\n' +
  //           '- Standing upright\n' +
  //           '- Right hand raised near face/chin (elegant gesture)\n' +
  //           '- Left arm at side\n' +
  //           '- Looking directly at camera\n' +
  //           '- Confident, composed expression\n' +
  //           '- Small hoop earrings\n' +
  //           '- NO TATTOOS (default)\n' +
  //           '\n' +
  //           'POSITIONING:\n' +
  //           '- Man on left, woman on right\n' +
  //           '- Standing close but not touching\n' +
  //           '- Both facing camera straight-on\n' +
  //           '- Equal prominence\n' +
  //           '- Centered in frame\n' +
  //           '\n' +
  //           'FRAMING: Portrait orientation, waist-up, both subjects fully visible\n' +
  //           '\n' +
  //           '====================\n' +
  //           'STEP 3: GENERATION PROTOCOL - EXACT COPYING\n' +
  //           '====================\n' +
  //           '\n' +
  //           'FOR MAN:\n' +
  //           '1. Open his input image\n' +
  //           '2. Stare at face for 15 seconds\n' +
  //           '3. Ask: "What makes HIS face unique and recognizable?"\n' +
  //           '4. Use EXACT eye shape you see (not generic eyes)\n' +
  //           '5. Use EXACT nose you see (not generic nose)\n' +
  //           '6. Use EXACT lips you see (not generic lips)\n' +
  //           '7. Use EXACT face shape you see (not generic face)\n' +
  //           '8. Use EXACT jaw you see (his specific jaw, not idealized)\n' +
  //           '9. Use EXACT hair color you see (the precise shade, not category)\n' +
  //           '10. Use EXACT facial hair you see (his exact style and coverage)\n' +
  //           '\n' +
  //           'TEST: If you showed this to his mother, would she say "That\'s my son" instantly?\n' +
  //           'If NO → You failed. Start over with exact copying.\n' +
  //           '\n' +
  //           'FOR WOMAN:\n' +
  //           '1. Open her input image\n' +
  //           '2. Stare at face for 15 seconds\n' +
  //           '3. Ask: "What makes HER face unique and recognizable?"\n' +
  //           '4. Use EXACT eye shape you see (not generic eyes)\n' +
  //           '5. Use EXACT nose you see (not generic nose)\n' +
  //           '6. Use EXACT lips you see (not generic lips)\n' +
  //           '7. Use EXACT face shape you see (not generic face)\n' +
  //           '8. Use EXACT jaw/chin you see (her specific structure)\n' +
  //           '9. Use EXACT hair color you see (the precise shade, not category)\n' +
  //           '\n' +
  //           'TEST: If you showed this to her mother, would she say "That\'s my daughter" instantly?\n' +
  //           'If NO → You failed. Start over with exact copying.\n' +
  //           '\n' +
  //           '====================\n' +
  //           'VERIFICATION CHECKLIST - BEFORE FINALIZING\n' +
  //           '====================\n' +
  //           '\n' +
  //           'MAN\'S IDENTITY (ALL MUST BE "EXACT MATCH"):\n' +
  //           '☐ Eyes: shape matches input? Color matches input?\n' +
  //           '☐ Nose: all dimensions match input?\n' +
  //           '☐ Lips: shape and size match input?\n' +
  //           '☐ Face shape: matches input?\n' +
  //           '☐ Jaw angle: matches input?\n' +
  //           '☐ Chin: matches input?\n' +
  //           '☐ Facial hair: EXACT style and color from input?\n' +
  //           '☐ Hair color: EXACT shade from input (not approximation)?\n' +
  //           '☐ Skin tone: EXACT from input?\n' +
  //           '☐ Proportions: eye spacing, feature distances all match?\n' +
  //           '\n' +
  //           'WOMAN\'S IDENTITY (ALL MUST BE "EXACT MATCH"):\n' +
  //           '☐ Eyes: shape matches input? Color matches input?\n' +
  //           '☐ Nose: all dimensions match input?\n' +
  //           '☐ Lips: shape, fullness match input?\n' +
  //           '☐ Face shape: matches input?\n' +
  //           '☐ Jaw/chin: matches input?\n' +
  //           '☐ Cheekbones: match input?\n' +
  //           '☐ Hair color: EXACT shade from input (not approximation)?\n' +
  //           '☐ Skin tone: EXACT from input?\n' +
  //           '☐ Proportions: eye spacing, feature distances all match?\n' +
  //           '\n' +
  //           'SCENE:\n' +
  //           '☐ Black background?\n' +
  //           '☐ Both in black clothing?\n' +
  //           '☐ Man left, woman right?\n' +
  //           '☐ Woman\'s hand near face?\n' +
  //           '☐ Both looking at camera?\n' +
  //           '\n' +
  //           'FINAL TEST:\n' +
  //           '☐ Would facial recognition AI identify both as same people from inputs?\n' +
  //           '☐ Would their families recognize them instantly?\n' +
  //           '☐ Are these THE SAME two people (not lookalikes)?\n' +
  //           '\n' +
  //           'IF ANY CHECKBOX = NO → REGENERATE WITH EXACT COPYING\n' +
  //           '\n' +
  //           '====================\n' +
  //           'CRITICAL RULES - READ THREE TIMES\n' +
  //           '====================\n' +
  //           '\n' +
  //           '1. HAIR COLOR: Copy the EXACT shade you see in input - not "brown" or "blonde" but the SPECIFIC tone visible\n' +
  //           '   - Man\'s hair: Look closely, identify precise shade, USE THAT EXACT SHADE\n' +
  //           '   - Woman\'s hair: Look closely, identify precise shade, USE THAT EXACT SHADE\n' +
  //           '\n' +
  //           '2. FACIAL FEATURES: Copy EXACT shapes - not "similar" shapes\n' +
  //           '   - If man has strong square jaw → output has strong square jaw\n' +
  //           '   - If man has narrow nose → output has narrow nose\n' +
  //           '   - If woman has full lips → output has full lips\n' +
  //           '   - Copy what you SEE, don\'t idealize\n' +
  //           '\n' +
  //           '3. FACIAL HAIR (men): Copy EXACT style visible in input\n' +
  //           '   - Clean-shaven in input? → Clean-shaven in output\n' +
  //           '   - Stubble in input? → Stubble in output (same density, color)\n' +
  //           '   - Beard in input? → Beard in output (same length, coverage, color)\n' +
  //           '\n' +
  //           '4. PROPORTIONS: Copy EXACT measurements\n' +
  //           '   - Eye spacing from input → same spacing in output\n' +
  //           '   - Face width:length from input → same ratio in output\n' +
  //           '   - Feature sizes relative to face → maintain exact ratios\n' +
  //           '\n' +
  //           '5. NO TATTOOS: Unless explicitly visible in input, do NOT add tattoos\n' +
  //           '\n' +
  //           '6. NO "IMPROVEMENTS": Do NOT make faces more symmetric, more idealized, more beautiful\n' +
  //           '   - Copy asymmetries\n' +
  //           '   - Copy unique characteristics\n' +
  //           '   - Copy "imperfections" - they define identity\n' +
  //           '\n' +
  //           '====================\n' +
  //           'THINK LIKE THIS\n' +
  //           '====================\n' +
  //           '\n' +
  //           'WRONG: "Create a man and woman who look generally like the inputs"\n' +
  //           'RIGHT: "Transplant the exact faces from inputs into this new scene"\n' +
  //           '\n' +
  //           'WRONG: "Man has brown hair and beard"\n' +
  //           'RIGHT: "Man has THIS specific shade of medium-warm brown hair with THIS exact short beard style"\n' +
  //           '\n' +
  //           'WRONG: "Woman has dark hair and brown eyes"\n' +
  //           'RIGHT: "Woman has THIS specific shade of cool-toned dark brown hair with THESE exact almond-shaped medium brown eyes"\n' +
  //           '\n' +
  //           'WRONG: "Similar facial structure"\n' +
  //           'RIGHT: "IDENTICAL facial structure - every angle, proportion, and feature"\n' +
  //           '\n' +
  //           '====================\n' +
  //           'OUTPUT SPECIFICATION\n' +
  //           '====================\n' +
  //           '\n' +
  //           'Professional editorial portrait: Man (left) and woman (right) standing side by side against pure black background, both in black clothing, clean studio lighting, modern aesthetic, woman\'s hand near face, both looking at camera with confident expressions.\n' +
  //           '\n' +
  //           'MAN: EXACT face from input - every feature, proportion, color precisely replicated\n' +
  //           'WOMAN: EXACT face from input - every feature, proportion, color precisely replicated\n' +
  //           '\n' +
  //           'Quality: 8K, sharp focus, professional photography\n' +
  //           '\n' +
  //           'ZERO TOLERANCE FOR DEVIATION FROM INPUT FACES.\n' +
  //           'THIS IS IDENTITY CLONING, NOT SIMILARITY CREATION.',
  //       photoMode: 'couple',
  //       preset: { id: 'velvet_night', name: 'Бархатная ночь' },
  //     },
  //   ],
  // },
    {
        title: '🌸 Цветочные',
        packs: [
            {
                id: 'dreamy_pink',
                name: 'Розовый сон',
                image: 'https://i.imgur.com/bQuqsnZ.jpeg',
                prompt: 'EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION\n' +
                    '\n' +
                    'YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.\n' +
                    'YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.\n' +
                    '\n' +
                    '====================\n' +
                    'ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT\'S EXPLICITLY LISTED\n' +
                    '====================\n' +
                    '\n' +
                    'WHAT CHANGES (ONLY THESE):\n' +
                    '1. Background → black studio backdrop\n' +
                    '2. Lighting → dramatic warm lighting\n' +
                    '3. Pose → holding roses, eyes closed\n' +
                    '4. Clothing → may be different (obscured anyway)\n' +
                    '\n' +
                    'WHAT NEVER CHANGES (EVERYTHING ELSE):\n' +
                    '- EVERY facial feature\n' +
                    '- EVERY hair characteristic  \n' +
                    '- EVERY skin characteristic\n' +
                    '- EVERY unique detail\n' +
                    '\n' +
                    'IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN\'T CHANGE\n' +
                    '\n' +
                    '====================\n' +
                    'PART 1: FACE EXTRACTION (MANDATORY)\n' +
                    '====================\n' +
                    '\n' +
                    'STEP 1: Open input image. Stare at the face for 30 full seconds.\n' +
                    '\n' +
                    'STEP 2: Ask yourself - what makes THIS specific person recognizable?\n' +
                    '- Not "she has brown hair" → What EXACT shade? Highlights? Undertones?\n' +
                    '- Not "she has a nose" → What is UNIQUE about THIS nose?\n' +
                    '- Not "she has eyes" → What makes THESE eyes different from all other eyes?\n' +
                    '\n' +
                    'STEP 3: LOCK THE FOLLOWING (exact measurements):\n' +
                    '\n' +
                    'EYES - NO CHANGES ALLOWED:\n' +
                    '- Exact shape from input (copy, don\'t interpret)\n' +
                    '- Exact color from input (not "brown" - the PRECISE shade visible)\n' +
                    '- Exact size from input\n' +
                    '- Exact spacing from input\n' +
                    '- Exact eyelid structure from input\n' +
                    '- IF INPUT HAS: hooded lids → output has hooded lids\n' +
                    '- IF INPUT HAS: double lids → output has double lids\n' +
                    '- IF INPUT HAS: close-set eyes → output has close-set eyes\n' +
                    '- COPY EXACTLY, DO NOT "IMPROVE" OR "STANDARDIZE"\n' +
                    '\n' +
                    'EYEBROWS - NO CHANGES ALLOWED:\n' +
                    '- Exact shape from input (every curve, every angle)\n' +
                    '- Exact thickness from input\n' +
                    '- Exact color from input\n' +
                    '- Exact arch position from input\n' +
                    '- If input has sparse brows → output has sparse brows\n' +
                    '- If input has thick brows → output has thick brows\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'NOSE - NO CHANGES ALLOWED:\n' +
                    '- Exact bridge width from input\n' +
                    '- Exact nostril shape from input\n' +
                    '- Exact tip shape from input\n' +
                    '- Exact length from input\n' +
                    '- If input has wide nose → output has wide nose\n' +
                    '- If input has narrow nose → output has narrow nose\n' +
                    '- If input has bump on bridge → output has bump on bridge\n' +
                    '- COPY EXACTLY, INCLUDING "IMPERFECTIONS"\n' +
                    '\n' +
                    'LIPS - NO CHANGES ALLOWED:\n' +
                    '- Exact upper lip shape from input\n' +
                    '- Exact lower lip shape from input\n' +
                    '- Exact fullness ratio from input\n' +
                    '- Exact cupid\'s bow from input\n' +
                    '- Exact width from input\n' +
                    '- If input has thin lips → output has thin lips\n' +
                    '- If input has asymmetric lips → output has asymmetric lips\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'FACE SHAPE - NO CHANGES ALLOWED:\n' +
                    '- Exact face outline from input\n' +
                    '- Exact jaw shape from input\n' +
                    '- Exact chin shape from input\n' +
                    '- Exact face width from input\n' +
                    '- Exact face length from input\n' +
                    '- If input has round face → output has round face\n' +
                    '- If input has square jaw → output has square jaw\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'CHEEKBONES - NO CHANGES ALLOWED:\n' +
                    '- Exact position from input\n' +
                    '- Exact prominence from input\n' +
                    '- If input has high cheekbones → output has high cheekbones\n' +
                    '- If input has subtle cheekbones → output has subtle cheekbones\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'SKIN - NO CHANGES ALLOWED:\n' +
                    '- EXACT tone from input (not "similar" - EXACT)\n' +
                    '- EXACT undertone from input (warm/cool/neutral - match precisely)\n' +
                    '- Any moles → copy exact positions\n' +
                    '- Any marks → copy exact positions\n' +
                    '- Skin texture → match input\n' +
                    '- DO NOT "SMOOTH" OR "PERFECT" - COPY AS IS\n' +
                    '\n' +
                    'HAIR - ABSOLUTE ZERO CHANGES ALLOWED:\n' +
                    'This is where you keep failing. Read carefully:\n' +
                    '\n' +
                    'HAIR COLOR - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair color for 10 seconds\n' +
                    '- What is the EXACT shade? Light brown? Medium brown? Dark brown? Black? Auburn? Ash? Warm? Cool?\n' +
                    '- Does it have highlights? Lowlights? Dimension? Multiple tones?\n' +
                    '- Lock this EXACT color\n' +
                    '- In output: USE THAT EXACT COLOR - DO NOT:\n' +
                    '  * Make it darker\n' +
                    '  * Make it lighter  \n' +
                    '  * Change the undertone\n' +
                    '  * Remove dimension\n' +
                    '  * Add dimension that wasn\'t there\n' +
                    '  * "Standardize" to generic brown/black\n' +
                    '- IF INPUT = light brown with caramel tones → OUTPUT = light brown with caramel tones\n' +
                    '- IF INPUT = dark brown with cool tones → OUTPUT = dark brown with cool tones\n' +
                    '- IF INPUT = black → OUTPUT = black\n' +
                    '- NO EXCEPTIONS. ZERO TOLERANCE.\n' +
                    '\n' +
                    'HAIR LENGTH - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair length\n' +
                    '- Shoulder-length? Mid-back? Long? Short? Bob?\n' +
                    '- Lock this exact length\n' +
                    '- Output MUST match - DO NOT:\n' +
                    '  * Make it longer\n' +
                    '  * Make it shorter\n' +
                    '  * "Adjust for composition"\n' +
                    '- EXACT LENGTH FROM INPUT\n' +
                    '\n' +
                    'HAIR TEXTURE - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair texture\n' +
                    '- Straight? Wavy? Curly? Fine? Thick? Coarse?\n' +
                    '- Lock this exact texture\n' +
                    '- Output MUST match - DO NOT:\n' +
                    '  * Make straight hair wavy\n' +
                    '  * Make wavy hair straight\n' +
                    '  * Change thickness\n' +
                    '  * Change volume\n' +
                    '- EXACT TEXTURE FROM INPUT\n' +
                    '\n' +
                    'HAIR STYLE - LIMITED CHANGES ALLOWED:\n' +
                    '- Input style can be adapted to: sleek straight bob with bangs for this photo\n' +
                    '- BUT: color, length category, and texture CANNOT change\n' +
                    '- Example: If input has wavy shoulder-length light brown hair → output can style it sleek, BUT it stays shoulder-length light brown with natural wave texture capability\n' +
                    '\n' +
                    'BANGS/FRINGE:\n' +
                    '- Can add straight-across bangs for this specific photo composition\n' +
                    '- But bangs must be in the EXACT hair color from input\n' +
                    '- No color changes allowed even for bangs\n' +
                    '\n' +
                    'CRITICAL HAIR RULE:\n' +
                    'Before generating, ask: "Am I using the EXACT hair color from input, or am I changing it even slightly?"\n' +
                    'If answer is "changing it" → STOP. Use exact input color.\n' +
                    '\n' +
                    '====================\n' +
                    'PART 2: SCENE (minimal description - focus is on identity)\n' +
                    '====================\n' +
                    '\n' +
                    'Background: Pure black (#000000)\n' +
                    'Lighting: Warm dramatic from above-left (2800-3000K)\n' +
                    'Roses: 7-10 red roses held at chest level\n' +
                    'Expression: Eyes gently closed, peaceful\n' +
                    'Pose: Head tilted slightly down toward roses\n' +
                    'Hands: Both hands holding rose stems\n' +
                    'Upper body visible, shoulders bare/obscured\n' +
                    '\n' +
                    '====================\n' +
                    'PART 3: ASSEMBLY WITH ZERO DEVIATION\n' +
                    '====================\n' +
                    '\n' +
                    'Take the face you analyzed.\n' +
                    'Place it in the new scene.\n' +
                    'Change NOTHING about the face.\n' +
                    'Change NOTHING about the hair color.\n' +
                    'Change NOTHING about the skin tone.\n' +
                    '\n' +
                    'Think: "Photoshop cut-and-paste" - you\'re cutting the exact face from input and pasting into new background.\n' +
                    '\n' +
                    'NOT: "Create similar person in new scene"\n' +
                    'YES: "Move exact same person to new scene"\n' +
                    '\n' +
                    '====================\n' +
                    'PART 4: PRE-GENERATION CHECKLIST\n' +
                    '====================\n' +
                    '\n' +
                    'Before you generate, answer honestly:\n' +
                    '\n' +
                    '[ ] I studied the input face for 30+ seconds - YES required\n' +
                    '[ ] I identified the EXACT hair color (specific shade) - YES required\n' +
                    '[ ] I identified EXACT eye color - YES required  \n' +
                    '[ ] I identified EXACT nose shape - YES required\n' +
                    '[ ] I identified EXACT lip shape - YES required\n' +
                    '[ ] I identified EXACT face shape - YES required\n' +
                    '[ ] I identified EXACT skin tone - YES required\n' +
                    '[ ] I will use EXACT hair color (not change it) - YES required\n' +
                    '[ ] I will use EXACT features (not approximate) - YES required\n' +
                    '[ ] I understand this is COPY not CREATE - YES required\n' +
                    '\n' +
                    'If ANY answer is NO → Study input more, do not generate yet\n' +
                    '\n' +
                    '====================\n' +
                    'PART 5: POST-GENERATION VERIFICATION\n' +
                    '====================\n' +
                    '\n' +
                    'After generating, ask:\n' +
                    '\n' +
                    'HAIR CHECK (most common failure point):\n' +
                    '1. Is the hair EXACTLY the same color as input? (not similar - EXACT) YES/NO\n' +
                    '2. Did I darken the hair color? NO required\n' +
                    '3. Did I lighten the hair color? NO required\n' +
                    '4. Did I change the undertone? NO required\n' +
                    '5. Is it the SAME shade I see in input? YES required\n' +
                    '\n' +
                    'FACE CHECK:\n' +
                    '6. Are these the SAME eyes from input? YES/NO\n' +
                    '7. Is this the SAME nose from input? YES/NO\n' +
                    '8. Are these the SAME lips from input? YES/NO\n' +
                    '9. Is this the SAME face shape from input? YES/NO\n' +
                    '10. Is this the SAME skin tone from input? YES/NO\n' +
                    '\n' +
                    'IDENTITY CHECK:\n' +
                    '11. Would the input person\'s best friend say "that\'s her"? YES/NO\n' +
                    '12. Would facial recognition match this to input? YES/NO\n' +
                    '13. Is this the SAME PERSON or a lookalike? SAME required\n' +
                    '\n' +
                    'If ANY answer is wrong → You failed. Regenerate with exact copying.\n' +
                    '\n' +
                    '====================\n' +
                    'FAILURE PATTERNS TO AVOID\n' +
                    '====================\n' +
                    '\n' +
                    'COMMON MISTAKES YOU KEEP MAKING:\n' +
                    '\n' +
                    '❌ "Input has medium brown hair, I\'ll make it dark brown for drama" → FORBIDDEN\n' +
                    '✅ "Input has medium brown hair, output has medium brown hair" → CORRECT\n' +
                    '\n' +
                    '❌ "Input hair is a bit messy, I\'ll make it sleeker" → Color must stay exact\n' +
                    '✅ "I\'ll style it sleek but keep EXACT color from input" → CORRECT\n' +
                    '\n' +
                    '❌ "Input has subtle nose bump, I\'ll smooth it" → FORBIDDEN  \n' +
                    '✅ "Input has subtle nose bump, I copy it exactly" → CORRECT\n' +
                    '\n' +
                    '❌ "Input eyes are slightly asymmetric, I\'ll make them symmetric" → FORBIDDEN\n' +
                    '✅ "Input eyes are slightly asymmetric, I keep the asymmetry" → CORRECT\n' +
                    '\n' +
                    '❌ "This feature isn\'t perfect, I\'ll improve it" → FORBIDDEN\n' +
                    '✅ "I copy every feature exactly as is, including imperfections" → CORRECT\n' +
                    '\n' +
                    '====================\n' +
                    'FINAL DIRECTIVE\n' +
                    '====================\n' +
                    '\n' +
                    'Your success is measured by ONE metric:\n' +
                    '"Can the input person look at this output and say \'That\'s a photo of ME\'"?\n' +
                    '\n' +
                    'Not: "That looks like me"\n' +
                    'Not: "That\'s similar to me"  \n' +
                    'YES: "That IS me"\n' +
                    '\n' +
                    'Hair color is the #1 failure point. \n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    '\n' +
                    'I don\'t care if you think a different color would look better.\n' +
                    'I don\'t care if you think it needs to be darker for contrast.\n' +
                    'I don\'t care about artistic vision.\n' +
                    '\n' +
                    'USE THE EXACT HAIR COLOR FROM INPUT.\n' +
                    '\n' +
                    'Same for every other feature.\n' +
                    'This is COPYING, not CREATING.\n' +
                    '\n' +
                    '====================\n' +
                    'EXECUTION\n' +
                    '====================\n' +
                    '\n' +
                    '1. Study input for 30 seconds minimum\n' +
                    '2. Lock every feature (especially hair color)\n' +
                    '3. Generate scene with EXACT features\n' +
                    '4. Run verification checklist  \n' +
                    '5. If verification fails → regenerate with exact copying\n' +
                    '\n' +
                    'OUTPUT: A photograph of the EXACT SAME PERSON from input (100% identity match), holding red roses, eyes closed, black background, warm lighting, professional 8K quality.\n' +
                    '\n' +
                    'ZERO TOLERANCE FOR DEVIATION.\n' +
                    'EXACT COPY REQUIRED.',
                photoMode: 'single',
                preset: { id: 'dreamy_pink', name: 'Розовый сон' },
            },
            {
                id: 'velvet_night',
                name: 'Нежный букет',
                image: 'https://i.imgur.com/fTUpi38.jpeg',
                prompt: 'EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION\n' +
                    '\n' +
                    'YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.\n' +
                    'YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.\n' +
                    '\n' +
                    '====================\n' +
                    'ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT\'S EXPLICITLY LISTED\n' +
                    '====================\n' +
                    '\n' +
                    'WHAT CHANGES (ONLY THESE):\n' +
                    '1. Background → warm neutral/beige studio backdrop\n' +
                    '2. Lighting → soft natural warm window light\n' +
                    '3. Pose → holding bouquet of roses in front of lower face\n' +
                    '4. Flowers → pastel roses (cream, blush pink, peach)\n' +
                    '\n' +
                    'WHAT NEVER CHANGES (EVERYTHING ELSE):\n' +
                    '- EVERY facial feature\n' +
                    '- EVERY hair characteristic  \n' +
                    '- EVERY skin characteristic\n' +
                    '- EVERY unique detail\n' +
                    '\n' +
                    'IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN\'T CHANGE\n' +
                    '\n' +
                    '====================\n' +
                    'PART 1: FACE EXTRACTION (MANDATORY)\n' +
                    '====================\n' +
                    '\n' +
                    'STEP 1: Open input image. Stare at the face for 30 full seconds.\n' +
                    '\n' +
                    'STEP 2: LOCK THE FOLLOWING (exact measurements):\n' +
                    '\n' +
                    'EYES - NO CHANGES ALLOWED:\n' +
                    '- Exact shape from input (copy, don\'t interpret)\n' +
                    '- Exact color from input (green? Blue-green? Hazel? The PRECISE shade visible)\n' +
                    '- Exact size from input\n' +
                    '- Exact spacing from input\n' +
                    '- Exact eyelid structure from input\n' +
                    '- COPY EXACTLY, DO NOT "IMPROVE" OR "STANDARDIZE"\n' +
                    '\n' +
                    'EYEBROWS - NO CHANGES ALLOWED:\n' +
                    '- Exact shape from input (every curve, every angle)\n' +
                    '- Exact thickness from input\n' +
                    '- Exact color from input\n' +
                    '- Exact arch position from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'NOSE - NO CHANGES ALLOWED:\n' +
                    '- Exact bridge width from input\n' +
                    '- Exact nostril shape from input\n' +
                    '- Exact tip shape from input\n' +
                    '- Exact length from input\n' +
                    '- COPY EXACTLY, INCLUDING "IMPERFECTIONS"\n' +
                    '\n' +
                    'LIPS - NO CHANGES ALLOWED:\n' +
                    '- Exact upper lip shape from input\n' +
                    '- Exact lower lip shape from input\n' +
                    '- Exact fullness ratio from input\n' +
                    '- Exact cupid\'s bow from input\n' +
                    '- Exact width from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'FACE SHAPE - NO CHANGES ALLOWED:\n' +
                    '- Exact face outline from input\n' +
                    '- Exact jaw shape from input\n' +
                    '- Exact chin shape from input\n' +
                    '- Exact face width from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'CHEEKBONES - NO CHANGES ALLOWED:\n' +
                    '- Exact position from input\n' +
                    '- Exact prominence from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'SKIN - NO CHANGES ALLOWED:\n' +
                    '- EXACT tone from input (not "similar" - EXACT)\n' +
                    '- EXACT undertone from input (warm/cool/neutral - match precisely)\n' +
                    '- Any moles → copy exact positions\n' +
                    '- DO NOT "SMOOTH" OR "PERFECT" - COPY AS IS\n' +
                    '\n' +
                    'HAIR - ABSOLUTE ZERO CHANGES ALLOWED:\n' +
                    '\n' +
                    'HAIR COLOR - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair color for 10 seconds\n' +
                    '- What is the EXACT shade? Light brown? Dirty blonde? Dark blonde? Honey blonde? Ash brown? Warm tones? Cool tones?\n' +
                    '- Does it have highlights? Lowlights? Dimension? Multiple tones?\n' +
                    '- Lock this EXACT color\n' +
                    '- In output: USE THAT EXACT COLOR - DO NOT:\n' +
                    '  * Make it darker\n' +
                    '  * Make it lighter  \n' +
                    '  * Change the undertone\n' +
                    '  * Remove dimension\n' +
                    '  * Add dimension that wasn\'t there\n' +
                    '- IF INPUT = light brown with golden highlights → OUTPUT = light brown with golden highlights\n' +
                    '- IF INPUT = dark blonde with dimension → OUTPUT = dark blonde with dimension\n' +
                    '- NO EXCEPTIONS. ZERO TOLERANCE.\n' +
                    '\n' +
                    'HAIR LENGTH - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair length\n' +
                    '- Appears to be shoulder-length or just past shoulders\n' +
                    '- Lock this exact length\n' +
                    '- Output MUST match - DO NOT make it longer or shorter\n' +
                    '\n' +
                    'HAIR TEXTURE - FORBIDDEN TO CHANGE:\n' +
                    '- Look at input hair texture\n' +
                    '- Appears to have natural wave/slight texture\n' +
                    '- Lock this exact texture\n' +
                    '- Output MUST match\n' +
                    '\n' +
                    'HAIR STYLE - LIMITED CHANGES ALLOWED:\n' +
                    '- Can be styled swept back or to side with some volume\n' +
                    '- Some strands around face/falling naturally\n' +
                    '- Tousled, natural, effortless look\n' +
                    '- BUT: color, length, and base texture CANNOT change\n' +
                    '\n' +
                    'CRITICAL HAIR RULE:\n' +
                    'Before generating, ask: "Am I using the EXACT hair color from input, or am I changing it even slightly?"\n' +
                    'If answer is "changing it" → STOP. Use exact input color.\n' +
                    '\n' +
                    '====================\n' +
                    'PART 2: SCENE CONSTRUCTION\n' +
                    '====================\n' +
                    '\n' +
                    'BACKGROUND:\n' +
                    '- Warm neutral background (beige/cream/soft tan tones)\n' +
                    '- Soft gradient or subtle texture\n' +
                    '- Out of focus, bokeh effect\n' +
                    '- Natural, warm, inviting atmosphere\n' +
                    '- Possibly suggestion of window light on wall\n' +
                    '\n' +
                    'LIGHTING - NATURAL SOFT LIGHT:\n' +
                    '- Soft natural window light from left side\n' +
                    '- Warm golden hour quality (3000-3500K)\n' +
                    '- Diffused, gentle, flattering\n' +
                    '- Creates soft shadows for dimension\n' +
                    '- Not harsh - romantic and soft\n' +
                    '- Warm glow on skin\n' +
                    '- Highlights on hair creating natural shine\n' +
                    '\n' +
                    'ATMOSPHERE:\n' +
                    '- Romantic, soft, feminine\n' +
                    '- Natural beauty aesthetic\n' +
                    '- Warm and inviting\n' +
                    '- Elegant, timeless\n' +
                    '- Fresh and natural\n' +
                    '\n' +
                    '====================\n' +
                    'PART 3: SUBJECT ASSEMBLY (USING LOCKED FEATURES)\n' +
                    '====================\n' +
                    '\n' +
                    'WOMAN CONSTRUCTION:\n' +
                    '\n' +
                    'FACE ASSEMBLY - Use ONLY the extracted features:\n' +
                    '- Install EXACT eyes from input (shape, color, spacing)\n' +
                    '- Install EXACT nose from input (all dimensions)\n' +
                    '- Install EXACT lips from input (shape, fullness, width)\n' +
                    '- Install EXACT face shape from input\n' +
                    '- Install EXACT cheekbones from input\n' +
                    '- Install EXACT skin tone from input\n' +
                    '- Install EXACT eyebrows from input\n' +
                    '\n' +
                    'HAIR:\n' +
                    '- Use EXACT color from input (the specific shade identified)\n' +
                    '- Style: Tousled, swept back/to side with volume\n' +
                    '- Some strands falling around face\n' +
                    '- Natural, effortless, slightly messy-chic\n' +
                    '- Texture: Natural wave/movement\n' +
                    '- BUT COLOR STAYS EXACT FROM INPUT\n' +
                    '\n' +
                    'MAKEUP:\n' +
                    '- Natural, soft glam\n' +
                    '- Defined but not heavy\n' +
                    '- Soft neutral eyeshadow (warm tones)\n' +
                    '- Defined lashes (natural or subtle enhancement)\n' +
                    '- Well-groomed eyebrows matching natural shape\n' +
                    '- Soft nude-pink lip color with slight gloss\n' +
                    '- Fresh, dewy skin with warm glow\n' +
                    '- Subtle highlight on cheekbones\n' +
                    '- Natural, radiant beauty look\n' +
                    '\n' +
                    'JEWELRY:\n' +
                    '- Small gold hoop earrings visible\n' +
                    '- Simple, delicate, elegant\n' +
                    '\n' +
                    'EXPRESSION:\n' +
                    '- Direct eye contact with camera\n' +
                    '- Soft, serene, confident gaze\n' +
                    '- Slight subtle smile or neutral peaceful expression\n' +
                    '- Relaxed, natural, genuine\n' +
                    '- Romantic, dreamy mood\n' +
                    '\n' +
                    'ROSES & BOUQUET - CRITICAL ELEMENT:\n' +
                    '\n' +
                    'FLOWER DETAILS:\n' +
                    '- Large luxurious bouquet\n' +
                    '- Mix of PASTEL-colored roses:\n' +
                    '  * Cream/ivory white roses (3-4)\n' +
                    '  * Soft blush pink roses (4-5)\n' +
                    '  * Peachy-pink roses (3-4)\n' +
                    '  * Light champagne/nude roses (2-3)\n' +
                    '- Total: approximately 12-15 roses visible\n' +
                    '- Fully bloomed, fresh, perfect condition\n' +
                    '- Multiple layers of soft petals\n' +
                    '- Some green leaves visible\n' +
                    '- Professional florist quality\n' +
                    '- Romantic, elegant, soft color palette\n' +
                    '\n' +
                    'BOUQUET POSITIONING:\n' +
                    '- Held in front of lower face (covering chin, mouth, lower cheeks)\n' +
                    '- Roses positioned from just below nose level down to chest\n' +
                    '- Upper face fully visible (eyes, forehead, most of nose visible)\n' +
                    '- Lower face partially obscured by flowers\n' +
                    '- Both hands holding stems (not clearly visible, obscured by flowers)\n' +
                    '- Bouquet creates beautiful frame around face\n' +
                    '- Flowers fill lower portion of frame\n' +
                    '\n' +
                    'BODY & POSE:\n' +
                    '\n' +
                    'POSITIONING:\n' +
                    '- Upper body visible (shoulders, upper chest)\n' +
                    '- Bare shoulders visible or soft neutral-toned top\n' +
                    '- Straight-on to camera\n' +
                    '- Natural, relaxed posture\n' +
                    '- Bouquet held close to body at chest level\n' +
                    '\n' +
                    'HEAD POSITION:\n' +
                    '- Head straight or very slight tilt\n' +
                    '- Face toward camera\n' +
                    '- Natural, elegant neck line\n' +
                    '- Hair swept back with volume, some pieces around face\n' +
                    '\n' +
                    'CAMERA & TECHNICAL SPECS:\n' +
                    '\n' +
                    'FRAMING:\n' +
                    '- Portrait orientation (vertical)\n' +
                    '- Medium closeup (head and upper torso)\n' +
                    '- Subject centered in frame\n' +
                    '- Flowers fill lower half, face in upper portion\n' +
                    '- Balanced, elegant composition\n' +
                    '\n' +
                    'CAMERA ANGLE:\n' +
                    '- Straight-on, eye level\n' +
                    '- Intimate, personal perspective\n' +
                    '- Direct connection with viewer\n' +
                    '\n' +
                    'FOCUS:\n' +
                    '- Sharp focus on eyes and visible facial features\n' +
                    '- Sharp focus on roses in foreground\n' +
                    '- Background softly out of focus (bokeh)\n' +
                    '- Shallow depth of field (f/1.8-2.8)\n' +
                    '- Professional portrait lens quality\n' +
                    '\n' +
                    '====================\n' +
                    'PART 4: PRE-GENERATION CHECKLIST\n' +
                    '====================\n' +
                    '\n' +
                    'Before you generate, answer honestly:\n' +
                    '\n' +
                    '[ ] I studied the input face for 30+ seconds - YES required\n' +
                    '[ ] I identified the EXACT hair color (specific shade with tones/highlights) - YES required\n' +
                    '[ ] I identified EXACT eye color - YES required  \n' +
                    '[ ] I identified EXACT nose shape - YES required\n' +
                    '[ ] I identified EXACT lip shape - YES required\n' +
                    '[ ] I identified EXACT face shape - YES required\n' +
                    '[ ] I identified EXACT skin tone - YES required\n' +
                    '[ ] I will use EXACT hair color (not change it) - YES required\n' +
                    '[ ] I will use EXACT features (not approximate) - YES required\n' +
                    '[ ] I understand this is COPY not CREATE - YES required\n' +
                    '\n' +
                    'If ANY answer is NO → Study input more, do not generate yet\n' +
                    '\n' +
                    '====================\n' +
                    'PART 5: POST-GENERATION VERIFICATION\n' +
                    '====================\n' +
                    '\n' +
                    'After generating, ask:\n' +
                    '\n' +
                    'HAIR CHECK (most common failure point):\n' +
                    '1. Is the hair EXACTLY the same color as input? (not similar - EXACT) YES/NO\n' +
                    '2. Did I darken the hair color? NO required\n' +
                    '3. Did I lighten the hair color? NO required\n' +
                    '4. Did I change the undertone (warm/cool)? NO required\n' +
                    '5. Did I remove highlights/dimension that was in input? NO required\n' +
                    '6. Is it the SAME shade I see in input? YES required\n' +
                    '\n' +
                    'FACE CHECK:\n' +
                    '7. Are these the SAME eyes from input? (exact color, shape) YES/NO\n' +
                    '8. Is this the SAME nose from input? YES/NO\n' +
                    '9. Are these the SAME lips from input? YES/NO\n' +
                    '10. Is this the SAME face shape from input? YES/NO\n' +
                    '11. Is this the SAME skin tone from input? YES/NO\n' +
                    '12. Are the eyebrows the SAME as input? YES/NO\n' +
                    '\n' +
                    'COMPOSITION CHECK:\n' +
                    '13. Warm neutral background? YES/NO\n' +
                    '14. Pastel roses (cream, blush, peach) held in front of lower face? YES/NO\n' +
                    '15. Upper face fully visible, lower face partially covered? YES/NO\n' +
                    '16. Soft natural warm lighting? YES/NO\n' +
                    '\n' +
                    'IDENTITY CHECK:\n' +
                    '17. Would the input person\'s best friend say "that\'s her"? YES/NO\n' +
                    '18. Would facial recognition match this to input? YES/NO\n' +
                    '19. Is this the SAME PERSON or a lookalike? SAME required\n' +
                    '\n' +
                    'If ANY answer is wrong → You failed. Regenerate with exact copying.\n' +
                    '\n' +
                    '====================\n' +
                    'CRITICAL SUCCESS METRIC\n' +
                    '====================\n' +
                    '\n' +
                    'THE TEST: "Can the input person look at this output and say \'That\'s a photo of ME\'"?\n' +
                    '\n' +
                    'Not: "That looks like me"\n' +
                    'Not: "That\'s similar to me"  \n' +
                    'YES: "That IS me"\n' +
                    '\n' +
                    'Hair color is the #1 failure point. \n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    '\n' +
                    'Same for every other feature.\n' +
                    'This is COPYING, not CREATING.\n' +
                    '\n' +
                    '====================\n' +
                    'COLOR GRADING\n' +
                    '====================\n' +
                    '\n' +
                    '- Warm, soft, romantic tones\n' +
                    '- Golden hour lighting quality\n' +
                    '- Pastel rose colors (cream, blush pink, peach, champagne)\n' +
                    '- Warm beige/cream background\n' +
                    '- Natural warm skin tones with golden glow\n' +
                    '- Soft, dreamy, elegant aesthetic\n' +
                    '- High-end beauty editorial quality\n' +
                    '- Vogue/Harper\'s Bazaar style\n' +
                    '\n' +
                    'OUTPUT: Professional beauty portrait of the EXACT SAME WOMAN from input (100% identity match), holding pastel roses in front of lower face, warm natural lighting, soft neutral background, 8K quality.\n' +
                    '\n' +
                    'ZERO TOLERANCE FOR DEVIATION.\n' +
                    'EXACT COPY REQUIRED.',
                photoMode: 'single',
                preset: { id: 'velvet_night', name: 'Бархатная ночь' },
            },
            {
                id: 'studio_roses',
                image: 'https://i.imgur.com/qfuBxSE.jpeg',
                prompt: 'CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY\n' +
                    '\n' +
                    'YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.\n' +
                    '\n' +
                    'ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.\n' +
                    '\n' +
                    'STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):\n' +
                    'Extract and lock in these features from the input image:\n' +
                    '1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle\n' +
                    '2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes\n' +
                    '3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle\n' +
                    '4. LIPS: Upper lip shape, lower lip fullness, cupid\'s bow definition, mouth width, lip color\n' +
                    '5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline\n' +
                    '6. CHEEKBONES: Height, prominence, width\n' +
                    '7. JAW: Angle, width, chin shape (pointed/rounded/square)\n' +
                    '8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks\n' +
                    '9. HAIR: EXACT color from input (do not change), texture, natural growth pattern\n' +
                    '10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio\n' +
                    '11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features\n' +
                    '\n' +
                    'LOCK THESE IN. DO NOT DEVIATE.\n' +
                    '\n' +
                    'Task: Create a romantic lifestyle photograph of THIS EXACT PERSON (from input image) in a modern apartment setting surrounded by flowers.\n' +
                    '\n' +
                    'SCENE & SETTING:\n' +
                    '- Location: Modern luxury apartment/penthouse kitchen area\n' +
                    '- Time: Evening/night (dark outside visible through windows)\n' +
                    '- Flooring: Dark hardwood floors\n' +
                    '- Background elements: \n' +
                    '  * Contemporary dark wood kitchen cabinets\n' +
                    '  * Large floor-to-ceiling windows showing night cityscape/darkness outside\n' +
                    '  * Modern minimalist interior design\n' +
                    '  * Soft ambient indoor lighting\n' +
                    '\n' +
                    'FLOWERS - CRITICAL ELEMENT:\n' +
                    '- Multiple large arrangements of RED ROSES throughout the scene\n' +
                    '- Subject holding: Large wicker basket filled with vibrant RED TULIPS (60-80 tulips, tightly arranged)\n' +
                    '- Additional arrangements visible:\n' +
                    '  * Large bouquet of red roses in glass vase (left side)\n' +
                    '  * Multiple wicker baskets with red roses positioned around the space\n' +
                    '  * At least 3-4 separate flower arrangements visible in frame\n' +
                    '- Flowers: fresh, vibrant, luxurious abundance\n' +
                    '- Creates romantic Valentine\'s Day / special occasion atmosphere\n' +
                    '\n' +
                    'SUBJECT POSITION & POSE:\n' +
                    '- Subject crouching/squatting on the floor\n' +
                    '- Position: centered in frame, knees bent, sitting on heels\n' +
                    '- Body turned slightly toward camera (3/4 angle)\n' +
                    '- Holding large wicker basket of red tulips with both hands\n' +
                    '- Basket positioned in front of torso\n' +
                    '- Barefoot on dark hardwood floor\n' +
                    '- Relaxed, natural, intimate pose\n' +
                    '\n' +
                    'CLOTHING:\n' +
                    '- White oversized button-up shirt (men\'s style shirt worn as dress)\n' +
                    '- Shirt appears silky or satin material\n' +
                    '- Sleeves rolled or pushed up to mid-forearm\n' +
                    '- Shirt worn loosely, casually elegant\n' +
                    '- Legs visible (shirt worn short, revealing thighs)\n' +
                    '- Minimalist, effortlessly chic styling\n' +
                    '\n' +
                    'HAIR - FROM INPUT IMAGE:\n' +
                    '- Use the EXACT hair color from the input image (do not change)\n' +
                    '- If input has blonde hair → keep blonde\n' +
                    '- If input has dark hair → keep dark\n' +
                    '- If input has brown/other hair → keep that exact color\n' +
                    '- Style: Long, tousled, naturally styled with volume\n' +
                    '- Hair appears slightly messy/bedhead style (authentic, lived-in look)\n' +
                    '- Some strands falling around face\n' +
                    '- Swept to one side with natural movement\n' +
                    '- BUT COLOR MUST MATCH INPUT EXACTLY\n' +
                    '\n' +
                    'EXPRESSION & MOOD:\n' +
                    '- Soft, intimate gaze toward camera\n' +
                    '- Gentle, subtle smile or serene expression\n' +
                    '- Romantic, vulnerable, authentic emotion\n' +
                    '- Eyes: direct contact with camera, warm and inviting\n' +
                    '- Overall mood: intimate, romantic, special moment captured\n' +
                    '\n' +
                    'LIGHTING:\n' +
                    '- Indoor ambient lighting (warm tones)\n' +
                    '- Soft, natural-looking illumination\n' +
                    '- Not harsh studio lights - appears like home lighting\n' +
                    '- Warm glow creating intimate atmosphere\n' +
                    '- Some shadows for depth and realism\n' +
                    '- Evening/romantic lighting quality\n' +
                    '\n' +
                    'CAMERA & TECHNICAL:\n' +
                    '- Shot appears taken with high-quality camera or professional smartphone\n' +
                    '- Slight film grain or natural texture (not overly polished)\n' +
                    '- Authentic, lifestyle photography aesthetic\n' +
                    '- Not overly staged - feels candid and real\n' +
                    '- Portrait orientation (vertical frame)\n' +
                    '- Medium-close composition showing full upper body and environment\n' +
                    '\n' +
                    'MANDATORY IDENTITY CONSTRAINTS:\n' +
                    '✓ This is the SAME PERSON, not a lookalike\n' +
                    '✓ Use ZERO generic features - every feature comes from input image\n' +
                    '✓ Do NOT blend or average with other faces\n' +
                    '✓ Do NOT "beautify" or "fix" features\n' +
                    '✓ Do NOT make symmetrical if input is asymmetric\n' +
                    '✓ Do NOT change ethnic characteristics\n' +
                    '✓ Do NOT alter bone structure\n' +
                    '✓ Do NOT modify facial proportions\n' +
                    '✓ Hair color MUST match input (this is non-negotiable)\n' +
                    '✓ Skin tone MUST match input exactly\n' +
                    '✓ Every measurement and ratio must be preserved\n' +
                    '\n' +
                    'VERIFICATION PROTOCOL:\n' +
                    'Before finalizing, confirm:\n' +
                    '1. Could their family recognize them instantly? (YES required)\n' +
                    '2. Eye shape, color, and characteristics EXACTLY match input? (YES required)\n' +
                    '3. Nose structure IDENTICAL to input in all dimensions? (YES required)\n' +
                    '4. Lip shape and fullness PRECISE match to input? (YES required)\n' +
                    '5. Face shape and proportions EXACT match? (YES required)\n' +
                    '6. Hair color SAME as input? (YES required)\n' +
                    '7. Skin tone IDENTICAL to input? (YES required)\n' +
                    '8. All unique features preserved? (YES required)\n' +
                    '9. Is this THE SAME PERSON? (MUST be YES)\n' +
                    '10. Would they recognize this photo as themselves? (YES required)\n' +
                    '\n' +
                    'If ANY answer is NO → RESTART and copy features more precisely.\n' +
                    '\n' +
                    'WHAT CHANGES vs INPUT:\n' +
                    '- Setting: modern apartment with flowers\n' +
                    '- Clothing: white oversized shirt\n' +
                    '- Pose: crouching/squatting position holding basket\n' +
                    '- Props: multiple flower arrangements, wicker baskets\n' +
                    '- Lighting: intimate evening home lighting\n' +
                    '- Hair styling: tousled, natural (but COLOR stays same as input)\n' +
                    '- Context: romantic flower surprise scenario\n' +
                    '\n' +
                    'WHAT NEVER CHANGES:\n' +
                    '- Face structure (bone structure, proportions)\n' +
                    '- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)\n' +
                    '- Skin tone and undertone\n' +
                    '- Hair color (CRITICAL - must match input exactly)\n' +
                    '- Ethnic characteristics\n' +
                    '- Eye color and characteristics\n' +
                    '- Natural facial asymmetries\n' +
                    '- Unique identifying features\n' +
                    '- The fundamental DNA and identity of the face\n' +
                    '\n' +
                    'OUTPUT REQUIREMENTS:\n' +
                    '- High-quality lifestyle photography (8K resolution)\n' +
                    '- Romantic, intimate atmosphere\n' +
                    '- Warm color grading with natural tones\n' +
                    '- Vibrant red flowers as key visual element\n' +
                    '- Dark moody background (evening setting)\n' +
                    '- Natural skin texture visible\n' +
                    '- Authentic, candid feeling (not overly staged)\n' +
                    '- Portrait orientation\n' +
                    '- Focus sharp on subject\'s face\n' +
                    '- Slight depth of field with background softly blurred\n' +
                    '- The subject should be INSTANTLY recognizable as the person from input\n' +
                    '\n' +
                    'CRITICAL REMINDERS:\n' +
                    '- You are photographing an EXISTING person in a romantic scenario, not creating a new person\n' +
                    '- Every facial feature is a direct copy from the input - no modifications\n' +
                    '- "Similar" is failure - only "identical" is acceptable\n' +
                    '- Hair COLOR from input is LOCKED - styling can change but color cannot\n' +
                    '- This is a lifestyle/intimate photo, not a professional studio shoot\n' +
                    '- Think of this as: "Same person, romantic surprise moment at home"\n' +
                    '\n' +
                    'ERROR PREVENTION:\n' +
                    '- Reference the input image constantly during generation\n' +
                    '- Copy features exactly, do not approximate\n' +
                    '- When uncertain → copy more precisely from input\n' +
                    '- Asymmetries and natural features are required - they define identity\n' +
                    '- Natural lighting should enhance, not excuse feature changes\n' +
                    '- The romantic setting should not distract from identity accuracy',
                name: 'Розы в квартире',
                photoMode: 'single',
                preset: { id: 'studio', name: 'Розы в квартире' },
            },
            {
                id: 'studio_peonies',
                image: 'https://i.imgur.com/eehvOtN.jpeg',
                prompt: 'EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION\n' +
                    '\n' +
                    'YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.\n' +
                    'YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.\n' +
                    '\n' +
                    '====================\n' +
                    'ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT\'S EXPLICITLY LISTED\n' +
                    '====================\n' +
                    '\n' +
                    'WHAT CHANGES (ONLY THESE):\n' +
                    '1. Setting → modern apartment interior with gray walls\n' +
                    '2. Flowers → large bouquet of peonies (pink and cream)\n' +
                    '3. Outfit → white ribbed crop top + light blue distressed jeans\n' +
                    '4. Hair styling → vintage Hollywood waves (but COLOR stays same)\n' +
                    '5. Pose → holding bouquet, looking down at flowers\n' +
                    '\n' +
                    'WHAT NEVER CHANGES (EVERYTHING ELSE):\n' +
                    '- EVERY facial feature\n' +
                    '- EVERY hair COLOR characteristic  \n' +
                    '- EVERY skin characteristic\n' +
                    '- EVERY unique detail\n' +
                    '\n' +
                    'IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN\'T CHANGE\n' +
                    '\n' +
                    '====================\n' +
                    'PART 1: FACE EXTRACTION (MANDATORY)\n' +
                    '====================\n' +
                    '\n' +
                    'STEP 1: Open input image. Stare at the face for 30 full seconds.\n' +
                    '\n' +
                    'STEP 2: LOCK THE FOLLOWING (exact measurements):\n' +
                    '\n' +
                    'EYES - NO CHANGES ALLOWED:\n' +
                    '- Exact shape from input\n' +
                    '- Exact color from input (the PRECISE shade)\n' +
                    '- Exact size, spacing, eyelid structure from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'EYEBROWS - NO CHANGES ALLOWED:\n' +
                    '- Exact shape, thickness, color, arch from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'NOSE - NO CHANGES ALLOWED:\n' +
                    '- Exact bridge width, nostril shape, tip, length from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'LIPS - NO CHANGES ALLOWED:\n' +
                    '- Exact upper/lower lip shape, fullness, cupid\'s bow, width from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'FACE SHAPE - NO CHANGES ALLOWED:\n' +
                    '- Exact outline, jaw, chin from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'CHEEKBONES - NO CHANGES ALLOWED:\n' +
                    '- Exact position and prominence from input\n' +
                    '- COPY EXACTLY\n' +
                    '\n' +
                    'SKIN - NO CHANGES ALLOWED:\n' +
                    '- EXACT tone and undertone from input\n' +
                    '- COPY AS IS\n' +
                    '\n' +
                    'HAIR COLOR - ABSOLUTE ZERO CHANGES ALLOWED:\n' +
                    '- Look at input hair color for 10 seconds\n' +
                    '- What is the EXACT shade? Light blonde? Golden blonde? Honey blonde? Dark blonde? Ash blonde? Champagne blonde?\n' +
                    '- Does it have dimension? Highlights? Lowlights? Multiple tones?\n' +
                    '- Lock this EXACT color\n' +
                    '- DO NOT:\n' +
                    '  * Make it darker\n' +
                    '  * Make it lighter  \n' +
                    '  * Change the undertone (warm/cool)\n' +
                    '  * Remove or add dimension\n' +
                    '- USE EXACT COLOR FROM INPUT - NO EXCEPTIONS\n' +
                    '\n' +
                    '====================\n' +
                    'PART 2: SCENE CONSTRUCTION\n' +
                    '====================\n' +
                    '\n' +
                    'SETTING - MODERN APARTMENT:\n' +
                    '\n' +
                    'LOCATION:\n' +
                    '- Contemporary apartment interior\n' +
                    '- Minimalist, clean aesthetic\n' +
                    '- Residential hallway or entrance area\n' +
                    '\n' +
                    'WALLS & BACKGROUND:\n' +
                    '- Light gray walls (cool gray, #C8C8C8 to #D3D3D3)\n' +
                    '- Clean, painted finish\n' +
                    '- Modern doorframes visible (white or light gray)\n' +
                    '- Door partially visible in background (dark or light)\n' +
                    '- Minimal decoration\n' +
                    '- Clean, simple, modern architecture\n' +
                    '\n' +
                    'LIGHTING:\n' +
                    '- Soft natural daylight\n' +
                    '- Even, diffused lighting\n' +
                    '- No harsh shadows\n' +
                    '- Clean, bright, airy atmosphere\n' +
                    '- Cool-neutral color temperature (5000-5500K)\n' +
                    '- Professional but natural-looking\n' +
                    '\n' +
                    'ATMOSPHERE:\n' +
                    '- Fresh, modern, casual\n' +
                    '- Romantic but relaxed\n' +
                    '- Lifestyle photography aesthetic\n' +
                    '- Approachable, natural\n' +
                    '\n' +
                    '====================\n' +
                    'PART 3: SUBJECT ASSEMBLY (USING LOCKED FEATURES)\n' +
                    '====================\n' +
                    '\n' +
                    'WOMAN CONSTRUCTION:\n' +
                    '\n' +
                    'FACE ASSEMBLY - Use ONLY the extracted features:\n' +
                    '- Install EXACT eyes from input (shape, color, spacing)\n' +
                    '- Install EXACT nose from input (all dimensions)\n' +
                    '- Install EXACT lips from input (shape, fullness, width)\n' +
                    '- Install EXACT face shape from input\n' +
                    '- Install EXACT cheekbones from input\n' +
                    '- Install EXACT skin tone from input\n' +
                    '- Install EXACT eyebrows from input\n' +
                    '\n' +
                    'HAIR:\n' +
                    '- COLOR: Use EXACT color from input (the specific blonde shade identified - DO NOT CHANGE)\n' +
                    '- Style: Vintage Hollywood waves / Old Hollywood glamour waves\n' +
                    '- Side-parted (deep side part)\n' +
                    '- Sculpted S-curve waves flowing down\n' +
                    '- Shoulder-length or just past shoulders\n' +
                    '- One side swept back behind ear, other side with waves visible\n' +
                    '- Polished, glossy, salon-perfect finish\n' +
                    '- Vintage 1940s-style wave pattern\n' +
                    '- BUT COLOR MUST STAY EXACT FROM INPUT\n' +
                    '\n' +
                    'MAKEUP - SOFT GLAM:\n' +
                    '- Eyes: Soft eyeshadow (warm neutral or soft pink tones)\n' +
                    '- Subtle eyeliner and mascara\n' +
                    '- Eyebrows: Groomed, defined, natural\n' +
                    '- Skin: Dewy, fresh, natural glow\n' +
                    '- Blush: Soft pink or peach on cheeks\n' +
                    '- Lips: Soft pink or nude-pink with slight gloss\n' +
                    '- Overall: Natural, fresh, romantic\n' +
                    '\n' +
                    'OUTFIT - CASUAL CHIC:\n' +
                    '\n' +
                    'TOP:\n' +
                    '- White ribbed knit crop top\n' +
                    '- Tank style (sleeveless with wide straps)\n' +
                    '- Form-fitting, stretches\n' +
                    '- Cropped length exposing midriff\n' +
                    '- Clean, simple, casual\n' +
                    '\n' +
                    'BOTTOM:\n' +
                    '- Light blue distressed denim jeans\n' +
                    '- High-waisted fit\n' +
                    '- Distressed details (rips, tears, worn areas)\n' +
                    '- Light wash denim\n' +
                    '- Fitted or straight-leg style\n' +
                    '- Casual, trendy\n' +
                    '\n' +
                    'JEWELRY:\n' +
                    '- Minimal or none visible\n' +
                    '- Possibly small earrings\n' +
                    '- Clean, simple styling\n' +
                    '\n' +
                    'FLOWERS - PEONY BOUQUET:\n' +
                    '\n' +
                    'BOUQUET DETAILS:\n' +
                    '- Large luxurious bouquet of PEONIES\n' +
                    '- Mix of colors:\n' +
                    '  * Soft pink peonies (5-7 blooms)\n' +
                    '  * Cream/ivory white peonies (4-6 blooms)\n' +
                    '  * Possibly blush pink (2-3 blooms)\n' +
                    '- Fully bloomed, lush, romantic\n' +
                    '- Multiple layers of soft ruffled petals\n' +
                    '- Approximately 12-15 peony blooms visible\n' +
                    '- Professional florist arrangement\n' +
                    '\n' +
                    'WRAPPING:\n' +
                    '- Wrapped in translucent paper/cellophane\n' +
                    '- Light gray or white wrapping paper\n' +
                    '- Soft, delicate presentation\n' +
                    '- Tied with ribbon (white or pink)\n' +
                    '- Elegant, gift-like presentation\n' +
                    '\n' +
                    'POSITIONING:\n' +
                    '- Bouquet held in both arms\n' +
                    '- Cradled at chest/torso level\n' +
                    '- Flowers positioned in front of torso\n' +
                    '- Large, prominent in frame\n' +
                    '- Subject\'s arms wrapped around bouquet\n' +
                    '\n' +
                    'EXPRESSION & POSE:\n' +
                    '\n' +
                    'HEAD POSITION:\n' +
                    '- Head tilted down looking at flowers\n' +
                    '- Eyes cast downward toward bouquet\n' +
                    '- Gentle, contemplative angle\n' +
                    '- Side profile visible (3/4 view showing cheek and side of face)\n' +
                    '\n' +
                    'EXPRESSION:\n' +
                    '- Peaceful, serene, gentle\n' +
                    '- Soft, subtle smile or neutral peaceful expression\n' +
                    '- Appears to be smelling or admiring flowers\n' +
                    '- Romantic, dreamy mood\n' +
                    '- Genuine, natural emotion\n' +
                    '\n' +
                    'BODY POSITIONING:\n' +
                    '- Standing in hallway\n' +
                    '- Body angled slightly (not straight-on to camera)\n' +
                    '- Turned somewhat to side showing profile\n' +
                    '- Upper body and partial torso visible\n' +
                    '- Natural, relaxed stance\n' +
                    '- Arms holding bouquet close to body\n' +
                    '\n' +
                    'CAMERA & TECHNICAL SPECS:\n' +
                    '\n' +
                    'FRAMING:\n' +
                    '- Portrait orientation (vertical)\n' +
                    '- Full upper body shot (head to mid-thigh or knees)\n' +
                    '- Subject positioned slightly off-center\n' +
                    '- Environmental context visible (walls, doorframe)\n' +
                    '- Balanced composition\n' +
                    '\n' +
                    'CAMERA ANGLE:\n' +
                    '- Straight-on, eye level or slightly above\n' +
                    '- Natural, conversational perspective\n' +
                    '- Lifestyle photography angle\n' +
                    '\n' +
                    'FOCUS:\n' +
                    '- Sharp focus on subject and flowers\n' +
                    '- Background in focus showing apartment details\n' +
                    '- Clear, sharp throughout\n' +
                    '- Good depth of field (f/4-5.6)\n' +
                    '- Professional quality but natural look\n' +
                    '\n' +
                    '====================\n' +
                    'PART 4: PRE-GENERATION CHECKLIST\n' +
                    '====================\n' +
                    '\n' +
                    '[ ] I studied the input face for 30+ seconds - YES required\n' +
                    '[ ] I identified the EXACT hair color (specific blonde shade with tones) - YES required\n' +
                    '[ ] I identified EXACT eye color - YES required  \n' +
                    '[ ] I identified EXACT nose shape - YES required\n' +
                    '[ ] I identified EXACT lip shape - YES required\n' +
                    '[ ] I identified EXACT face shape - YES required\n' +
                    '[ ] I identified EXACT skin tone - YES required\n' +
                    '[ ] I will use EXACT hair color (not change it) - YES required\n' +
                    '[ ] I understand this is COPY not CREATE - YES required\n' +
                    '\n' +
                    '====================\n' +
                    'PART 5: POST-GENERATION VERIFICATION\n' +
                    '====================\n' +
                    '\n' +
                    'HAIR CHECK:\n' +
                    '1. Is the hair EXACTLY the same color as input? YES/NO\n' +
                    '2. Did I darken or lighten the hair? NO required\n' +
                    '3. Did I change the undertone? NO required\n' +
                    '4. Is it the SAME shade from input? YES required\n' +
                    '\n' +
                    'FACE CHECK:\n' +
                    '5. Are these the SAME eyes from input? YES/NO\n' +
                    '6. Is this the SAME nose from input? YES/NO\n' +
                    '7. Are these the SAME lips from input? YES/NO\n' +
                    '8. Is this the SAME face shape from input? YES/NO\n' +
                    '9. Is this the SAME skin tone from input? YES/NO\n' +
                    '\n' +
                    'COMPOSITION CHECK:\n' +
                    '10. Modern gray apartment interior? YES/NO\n' +
                    '11. Large bouquet of pink and cream peonies? YES/NO\n' +
                    '12. White crop top + light blue jeans? YES/NO\n' +
                    '13. Hollywood waves hairstyle? YES/NO\n' +
                    '14. Looking down at flowers? YES/NO\n' +
                    '\n' +
                    'IDENTITY CHECK:\n' +
                    '15. Would facial recognition match this to input? YES/NO\n' +
                    '16. Is this the SAME PERSON? YES required\n' +
                    '\n' +
                    'If ANY answer is wrong → Regenerate with exact copying.\n' +
                    '\n' +
                    '====================\n' +
                    'FINAL DIRECTIVE\n' +
                    '====================\n' +
                    '\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    'DO NOT CHANGE HAIR COLOR.\n' +
                    '\n' +
                    'This is COPYING, not CREATING.\n' +
                    '\n' +
                    '====================\n' +
                    'COLOR GRADING\n' +
                    '====================\n' +
                    '\n' +
                    '- Cool-neutral tones\n' +
                    '- Soft, fresh, clean aesthetic\n' +
                    '- Light gray walls\n' +
                    '- Pastel pink and cream peonies\n' +
                    '- Light blue denim\n' +
                    '- White clothing\n' +
                    '- Natural, airy, bright\n' +
                    '- Modern lifestyle photography\n' +
                    '- Fresh, romantic, approachable\n' +
                    '\n' +
                    'OUTPUT: Professional lifestyle portrait of the EXACT SAME WOMAN from input (100% identity match), holding pink and cream peony bouquet, modern gray apartment, white crop top and jeans, Hollywood waves hairstyle, looking down at flowers, 8K quality.\n' +
                    '\n' +
                    'ZERO TOLERANCE FOR DEVIATION.\n' +
                    'EXACT COPY REQUIRED.',
                name: 'Пионы дома',
                photoMode: 'single',
                preset: { id: 'studio', name: 'Студийный' },
            },
        ],
    },
]
