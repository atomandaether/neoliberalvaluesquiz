# Neoliberal Values Quiz

Static GitHub Pages starter for an exploratory r/neoliberal-centered political values quiz.

## Current provisional axes

1. Market Process ↔ Government Direction
2. Liberal Universalism ↔ Partisan Alignment
3. Cosmopolitanism ↔ Communitarianism
4. Institutionalism ↔ Populism
5. Tradeoff-Oriented ↔ Rights-First
6. International Engagement ↔ Restraint & Sovereignty
7. Expansive Progressivism ↔ Limited Progressivism

## Files

- `config.js` — axis definitions and response scale
- `questions.js` — question bank and axis weights
- `app.js` — quiz logic and scoring
- `results.js` — results rendering and JSON export
- `index.html`, `quiz.html`, `results.html` — pages
- `style.css` — site styling

## Scoring

Each question has an `effects` object. Positive weights move toward pole A; negative weights move toward pole B. Respondent choices multiply those weights from -1 to +1. Each axis is normalized to a 0–100 score, with 50 as the midpoint.

The included questions are UI/calibration placeholders, not a validated final questionnaire.

## GitHub Pages

Push these files to the repository root, then enable GitHub Pages for the main branch/root directory in repository settings.

## Preparatory-survey note

GitHub Pages is static and cannot itself store respondents' raw answers. `results.js` currently lets a respondent download their response record as JSON. For subreddit-wide data collection, add a submission endpoint (for example, a small serverless function or survey backend) before fielding the preparatory survey.
