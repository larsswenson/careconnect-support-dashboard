#!/usr/bin/env python3
import sys, json, random

def onboard_user(name):
    data = {
        "name": name,
        "laptop_id": f"LAP-{random.randint(1000,9999)}",
        "accounts": {
            "email": f"{name.replace(' ','').lower()}@divergehealth.org",
            "slack": f"@{name.split()[0].lower()}",
            "vpn": True
        },
        "status": "Provisioned"
    }
    return data

if __name__ == "__main__":
    name = sys.argv[1] if len(sys.argv) > 1 else "New User"
    print(json.dumps(onboard_user(name)))
