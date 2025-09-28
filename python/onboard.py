import json
import sys

def generate_onboarding(name):
    onboarding_data = {
        "name": name,
        "laptop_id": f"LAPTOP-{hash(name) % 10000}",
        "email": f"{name.lower().replace(' ', '.')}@careconnect.local",
        "accounts": ["email", "vpn", "internal_portal"]
    }
    return onboarding_data

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No name provided"}))
        sys.exit(1)

    name = sys.argv[1]
    result = generate_onboarding(name)
    print(json.dumps(result))


