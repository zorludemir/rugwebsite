import ContactForm from './ContactForm';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';
import GoogleMapEmbed from './GoogleMapEmbed';

// Placeholder location - Replace with actual factory coordinates
const factoryLocation = { lat: 34.0522, lng: -118.2437 }; // Example: Los Angeles City Hall

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We'd love to hear from you! Whether you have a question about our services or want to start a project, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-card">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <Card className="bg-card">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p>123 PrintCraft St, Textile City, TC 12345</p> {/* Replace with actual address */}
                    <a
                     href={`https://www.google.com/maps/search/?api=1&query=${factoryLocation.lat},${factoryLocation.lng}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-accent hover:underline text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a href="tel:+1234567890" className="hover:text-accent">(123) 456-7890</a> {/* Replace with actual number */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a href="mailto:info@printcraft.com" className="hover:text-accent">info@printcraft.com</a> {/* Replace with actual email */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card overflow-hidden">
             <CardContent className="p-0">
                <GoogleMapEmbed location={factoryLocation} />
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
