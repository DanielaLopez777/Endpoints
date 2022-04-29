```mermaid
erDiagram
    User ||--o{ Contact : has
    Contact {
        smallserial id PK "Contact unique identifier"
        smallserial userId FK "The ID of the owner"
        string name
        string lastname
        string email
        string cellphone
        string phone
        string address
        date birthday
        bool favorite
    }
    Contact }o--o| Company : has
    Company {
        smallserial id PK "Company unique identifier"
        string name
    }
```
Powered by [mermaidJS](https://mermaid-js.github.io/mermaid/#/./entityRelationshipDiagram)

# Stack
- Server-side framework: [loopbackJS](https://loopback.io/doc/en/lb3/index.html)
- Database: [postgresql](https://www.postgresql.org/docs/
)

To ease the development process [docker](https://docs.docker.com/get-started/) has been integrated to run the database.

# Setup



# Instructions

1. Start database
`docker compose up`
`docker compose down`

2. Create models
`lb model`