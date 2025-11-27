import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Server, Lock, Zap } from "lucide-react";

const API = () => {
  const requestExample = `POST http://10.0.62.205:5000/predict
Content-Type: application/json

{
  "text": "I hate you",
  "language": "english"
}`;

  const pythonSDKExample = `import requests

API_URL = "http://10.0.62.205:5000/predict"

def query(payload):
    response = requests.post(API_URL, json=payload)
    return response.json()

# Example
data = query({
    "text": "I hate you",
    "language": "english"
})

print(data)

# Example Output:
# {
#   "result": "UNSAFE",
#   "multiclass_output": {"S1": 0.25, "S10": 0.15, "S17": 0.45}
# }`;

  const responseSchema = `{
  "result": "string",                   // Either "SAFE" or "UNSAFE"
  "multiclass_output": {                // Present if result is "UNSAFE"
    "S1": "float",                      // Safety category scores
    "S10": "float",
    "S17": "float"
  },
  "error": "string"                     // Present if there's an error
}`;

  const errorExample = `{
  "error": "Category Service Unavailable"
}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">UnityAI-Guard v2 API</h1>
            <p className="text-xl text-muted-foreground">
              Multilingual Toxicity Detection with Fine-Grained Safety Categorization — Deployed on Custom Server
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Local API Endpoint</h3>
              <p className="text-sm text-muted-foreground">Easily access the model via the local server API</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Secure Access</h3>
              <p className="text-sm text-muted-foreground">Authorization through custom token (if applicable)</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Fast Inference</h3>
              <p className="text-sm text-muted-foreground">Optimized for low-latency prediction</p>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Endpoint</h2>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <code className="text-lg">POST http://10.0.62.205:5000/predict</code>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Request Format</h3>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="http" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {requestExample}
                </SyntaxHighlighter>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8">Request Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Parameter</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Required</th>
                      <th className="text-left py-3 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>text</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">The input text to analyze for toxicity</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4"><code>language</code></td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Language code (e.g. "english", "bengali")</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Response Schema</h2>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="json" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {responseSchema}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Python Example</h2>
              <p className="text-muted-foreground mb-4">
                Call the UnityAI-Guard v2 model directly from your Python code:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="python" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {pythonSDKExample}
                </SyntaxHighlighter>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Error Handling</h2>
              <p className="text-muted-foreground mb-4">
                The API may return the following error message:
              </p>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="json" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  {errorExample}
                </SyntaxHighlighter>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default API;
