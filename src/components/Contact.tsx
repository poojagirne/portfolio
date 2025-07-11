import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            Get in Touch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Reach Out to me!</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Discuss a project or just want to say hi? My Inbox is open for all.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-muted-foreground">Pooja Girne</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">Surat, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">poojagirne24@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay connected</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <span className="text-primary-foreground text-sm font-bold">G</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <span className="text-primary-foreground text-sm font-bold">T</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <span className="text-primary-foreground text-sm font-bold">L</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Message me</h3>
            <Card className="card-hover p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;