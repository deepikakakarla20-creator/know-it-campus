import { GraduationCap, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const CampusHeader = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-campus text-primary-foreground py-8 px-6 shadow-campus">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap size={32} />
            <h1 className="text-3xl md:text-4xl font-bold">Smart Campus Assistant</h1>
          </div>
          
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Your AI-powered guide to campus information and services
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              <Sparkles size={12} className="mr-1" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              24/7 Available
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
              Instant Answers
            </Badge>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-12 right-8 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-4 left-1/3 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-8 right-1/4 w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};