
# Frontend
## Run
Just open index.html in browser OR serve via backend.

## Features
- Fetches API from backend
- Search filter
- Conflict highlighting
- Click row → show source details

## API
http://localhost:8080/api/meetings


#Backend

## Run
mvn spring-boot:run

## Features
- Ingest CRM + Calendar JSON
- Reconcile meetings
- Conflict detection (location, status)
- REST API
- UI to display conflicts

## Matching Logic
- Company name match (partial)
- Title contains company keyword

## Conflict Strategy
- Conflicts exposed (not hidden)
- Calendar preferred if present

## Edge Cases Handled
- Null values
- Malformed dates
- Missing fields
- Conflicting status

## Improvements
- Fuzzy matching
- DB persistence
- Auth layer
- Better UI
