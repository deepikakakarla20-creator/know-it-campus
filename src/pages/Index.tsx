import React from 'react';
import { Card } from '@/components/ui/card';
import { CampusHeader } from '@/components/CampusHeader';
import { CampusChat } from '@/components/CampusChat';
import { campusCategories } from '@/types/campus';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <CampusHeader />
      
      <div className="max-w-6xl mx-auto p-6 -mt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-soft sticky top-6">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Information Categories</h2>
              <div className="space-y-3">
                {campusCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/10 transition-smooth cursor-pointer"
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                <h3 className="text-sm font-medium text-success mb-2">Need Help?</h3>
                <p className="text-xs text-muted-foreground">
                  Ask me anything about campus life, and I'll provide you with accurate, up-to-date information!
                </p>
              </div>
            </Card>
          </div>
          
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="shadow-campus overflow-hidden">
              <CampusChat />
            </Card>
          </div>
        </div>
        
        {/* Info Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Smart Campus Assistant - Powered by AI • Available 24/7 • 
            <span className="text-accent font-medium"> Always Here to Help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
