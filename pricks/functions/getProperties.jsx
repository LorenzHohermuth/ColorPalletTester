import React from 'react'

export default function getProperties() {
    const properties = [
        "primary",
        "secondary",
        "bgPrimary",
        "bgSecondary",
        "textPrimary",
        "textSecondary",
    ];

  return properties
}

export function getPropertiesCss() {
    const properties = [
        "--primary",
        "--secondary",
        "--bgPrimary",
        "--bgSecondary",
        "--textPrimary",
        "--textSecondary",
    ];

  return properties
}
