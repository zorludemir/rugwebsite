import ContactForm from './ContactForm';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact EuroserPOD</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We'd love to hear from you! Whether you have a question about our custom rug services or want to start a project, feel free to reach out.
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
                    <p>Kayseri OSB, 12. Cadde NO:31, 38070, 38070 Melikgazi/Kayseri</p>
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
                    <a href="mailto:info@euroserpod.com" className="hover:text-accent">info@euroserpod.com</a> {/* Replace with actual email */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.6639761631195!2d35.367564699999996!3d38.7255231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b053c3c93db4b%3A0x14341f503c2e57cf!2sHALISER%20T%C4%B0CARET!5e0!3m2!1str!2str!4v1749534345051!5m2!1str!2str"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
