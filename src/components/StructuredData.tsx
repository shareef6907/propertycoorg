"use client";

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": "3.86 Acre Property for Sale in Coorg, Napokulu",
        "description": "Premium 3.86-acre land for sale in Coorg, Napokulu. Ideal for resort development, wedding venue & commercial investment. Near Madikeri. Convertible to commercial.",
        "url": "https://propertycoorg.com",
        "image": [
            "https://propertycoorg.com/gallery/1.jpeg",
            "https://propertycoorg.com/gallery/2.jpeg",
            "https://propertycoorg.com/gallery/3.jpeg"
        ],
        "offers": {
            "@type": "Offer",
            "price": "80000000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cheriye Paramb, Napokulu",
            "addressLocality": "Madikeri",
            "addressRegion": "Karnataka",
            "addressCountry": "IN",
            "postalCode": "571201"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.4244",
            "longitude": "75.7382"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Coorg, Kodagu, Karnataka"
        },
        "numberOfRooms": "N/A",
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": "3.86",
            "unitCode": "ACR"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Land Type",
                "value": "Convertible to Commercial"
            },
            {
                "@type": "PropertyValue",
                "name": "Ideal For",
                "value": "Resort, Wedding Venue, Commercial Development"
            }
        ],
        "telephone": "+97333007030",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+97333007030",
            "contactType": "Sales"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
