## Nike Store ERD

```mermaid
erDiagram
    PRODUCT ||--o{ CUSTOMER : places
    PRODUCT {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

```



