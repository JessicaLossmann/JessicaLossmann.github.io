## Nike Store ERD

```mermaid
erDiagram
    PRODUCT ||--|{ SALES : has
    PRODUCT {
        int ProductID PK
        string Name
    }
    SALES {
        int OrderID PK
        int ProductID FK
        int Quantity    
   }
    SALES ||--|| CUSTOMER : contains
        CUSTOMER {
        int CustomerID PK
        string Address
        string Email
        float pricePerUnit
    }
    PRODUCT ||--|{ INVENTORY : contains
    INVENTORY {
        int ProductID PK
        string Name
        string Description
        string Location
        float Cost
        int Quantity
    }

```



