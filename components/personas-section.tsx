import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap, MapPin, Target, AlertTriangle, Heart } from 'lucide-react'

export function PersonasSection() {
  return (
    <section id="personas" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Meet Our Users</h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Through extensive research and interviews, we identified key personas who face critical challenges with AI
            ethics and compliance in their daily work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primary Persona - Sarah Chen */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">Sarah Chen</CardTitle>
                  <CardDescription className="text-base font-medium">
                    CTO, Mid-size Financial Services Company
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      MS Computer Science, MBA
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">Primary Persona</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Background & Experience
                </h4>
                <p className="text-sm text-muted-foreground">
                  15+ years in technology leadership, spearheading digital transformation with a focus on ethical,
                  explainable AI systems. Uses SAP S/4HANA for core ERP and integrates AI-based fraud detection.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Daily Challenges
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Struggles to explain AI logic to board and regulators</li>
                  <li>• Reviewing incomplete and outdated ethics reports</li>
                  <li>• Audits take 2-3 weeks, delaying innovation</li>
                  <li>• Constantly worried about GDPR, EEOC compliance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  Goals & Aspirations
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Streamline AI audits to save time</li>
                  <li>• Build stakeholder trust</li>
                  <li>• Maintain brand reputation</li>
                  <li>• Deploy AI with confidence in fairness and compliance</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Persona - Marcus Rodriguez */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-2 w-full bg-gradient-to-r from-teal-500 to-green-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                  MR
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">Marcus Rodriguez</CardTitle>
                  <CardDescription className="text-base font-medium">
                    AI Ethics Compliance Manager, Large Healthcare Corporation
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Boston, MA
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      PhD AI Ethics, JD Technology Law
                    </div>
                  </div>
                </div>
                <Badge variant="outline">Secondary Persona</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  Healthcare Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  8 years in governance and compliance. Uses SAP BTP for AI-driven patient services, oversees clinical
                  workflows with AI-assisted diagnosis tools. Ensures HIPAA, FDA compliance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Pain Points
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lack of real-time bias tracking</li>
                  <li>• Difficult to integrate bias monitoring into clinical workflows</li>
                  <li>• Cumbersome manual compliance reports</li>
                  <li>• Fear of legal and ethical exposure</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  Aspirations
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reliable automated compliance</li>
                  <li>• Ethical transparency for patients</li>
                  <li>• Protect brand reputation in health sector</li>
                  <li>• Industry recognition for responsible practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
