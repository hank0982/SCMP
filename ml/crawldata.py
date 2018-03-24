import requests 
import json
fo = open("foo.txt", "wb")

r=requests.get("https://datastudio-api.hkstp.org:443/scmparticlessample/v1.0/datastore_search?resource_id=0e27027d-ef86-4d03-ba99-3bb0fafec3f9&limit=40000",headers={"Authorization":"Bearer 44d8534a3575f7d2c48f273231168a49", "Accept": "application/json"}, verify=False)
text = r.text 
json_text = json.loads(text)
final = json.dumps(json_text['result']['records'], indent=4, sort_keys=True)
print(final)
# fo.write(final)
fo.close()
