import React from 'react';
import { Card } from './components/ui/card';
import { Shield, Globe, Heart, ArrowRight } from 'lucide-react';
import IconImage from './assets/Icon.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async'; // Make sure to use React Helmet Async for better performance

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 min-h-screen">
      {/* SEO Helmet Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Unknown Chat Bot | Anonymous Random Chats on Telegram</title>
        <meta name="title" content="Unknown Chat Bot | Anonymous Random Chats on Telegram" />
        <meta name="description" content="Connect with random people worldwide for anonymous chats. No sign-up needed, select opposite gender preference for free. Private, secure, and instant connections on Telegram." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unknownchatbot.vercel.app/" />
        <meta property="og:title" content="Unknown Chat Bot | Meet New People Anonymously" />
        <meta property="og:description" content="Connect with random people worldwide for anonymous chats. No login, complete privacy, and free opposite gender preference." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unknownchatbot.vercel.app/" />
        <meta property="twitter:title" content="Unknown Chat Bot | Anonymous Random Chats on Telegram" />
        <meta property="twitter:description" content="Connect with random people worldwide for anonymous chats. No login, complete privacy, and free opposite gender preference." />
        <meta property="twitter:image" content="/twitter-image.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="keywords" content="anonymous chat, telegram bot, random chat, stranger chat, private messaging, anonymous messaging, online chat, global connections, meet new people, chat bot" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Unknown Chat Bot" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://unknownchatbot.vercel.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section - 15% smaller components */}
      <section className="px-3 py-5 md:py-12 lg:py-14 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto -mt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Unknown Chat Bot<br />Connect Freely
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl mb-5 md:mb-6">
            Connect with random people from around the world anonymously and safely. 
            No sign-up, no tracking, just instant conversations with complete privacy.
          </p>
          <div>
            <a
              href="https://t.me/unknwn_chat_bot"
              className="bg-white text-pink-600 px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-xs md:text-sm"
            >
              Start Chatting <ArrowRight className="ml-2" size={14} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Phone Frame - 15% smaller */}
            <div className="bg-white rounded-3xl p-2 shadow-xl w-[204px] md:w-[272px] h-[408px] md:h-[544px] relative overflow-hidden">
              <div className="relative z-10 p-2 md:p-3 h-full overflow-y-auto text-xs md:text-xs text-black bg-white bg-opacity-90 rounded-2xl">
                <div className="bg-gray-100 rounded-t-xl p-1 md:p-1.5 text-center">
                  <p className="font-semibold text-xs">Unknown Chat Bot</p>
                </div>
                <p className="text-gray-500 text-center my-1 md:my-1.5 text-xs">Connected to a stranger. Say hi!</p>
                <div className="space-y-1 md:space-y-1.5">
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">Hi there!</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">Hello! How are you?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">I'm good! Where are you from?</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">I'm from Japan, you?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">That's cool! I'm from Brazil</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">Awesome! What do you do?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">I'm a student, studying design</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">That's interesting! I work in tech</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">Nice! What kind of tech?</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">AI and machine learning!</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-10 h-10 md:w-14 md:h-14 bg-yellow-300 rounded-full opacity-60 blur-md"></div>
            <div className="absolute -bottom-5 -left-5 w-14 h-14 md:w-20 md:h-20 bg-blue-400 rounded-full opacity-60 blur-md"></div>
          </div>
        </div>
      </section>

      {/* Features Section - 15% smaller components */}
      <section id="features" className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Our Chat Bot?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Shield className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">100% Anonymous</h3>
              <p className="text-gray-600 text-sm">Chat without revealing your identity. No personal information is ever stored or shared.</p>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Globe className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Global Connections</h3>
              <p className="text-gray-600 text-sm">Meet people from around the world and learn about different cultures and perspectives.</p>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Heart className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Safe Environment</h3>
              <p className="text-gray-600 text-sm">Our moderation tools ensure conversations remain respectful and appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 15% smaller components */}
      <section id="how-it-works" className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Click "Start Chatting"</h3>
              <p className="text-gray-600 text-sm">Visit our Telegram bot through the link and press start.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Connected</h3>
              <p className="text-gray-600 text-sm">Our system will instantly match you with a random person.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start a Conversation</h3>
              <p className="text-gray-600 text-sm">Begin chatting anonymously and safely with your new connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - 15% smaller components */}
      <section className="py-14 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-1">1k+</h3>
              <p className="text-lg">Active Users</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-1">10+</h3>
              <p className="text-lg">Countries</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-1">10k+</h3>
              <p className="text-lg">Daily Conversations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 15% smaller components */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"I've made friends from countries I never thought I'd connect with. This app breaks down barriers!"</p>
              <p className="font-semibold text-sm">- Alex, 23</p>
            </Card>
            
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"The anonymity makes it so easy to be myself. I love the random connections and interesting conversations."</p>
              <p className="font-semibold text-sm">- Sarah, 28</p>
            </Card>
            
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"As someone who's shy in person, this bot has helped me practice my social skills in a comfortable environment."</p>
              <p className="font-semibold text-sm">- Michael, 19</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - 15% smaller components */}
      <section id="faq" className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Is it really anonymous?</h3>
              <p className="text-gray-600 text-sm">Yes, we don't collect any personal information. Your identity remains completely private.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Can I block someone?</h3>
              <p className="text-gray-600 text-sm">Absolutely. You can end any conversation instantly and never be matched with that person again.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Is there moderation?</h3>
              <p className="text-gray-600 text-sm">Yes, we have automated systems and user reporting to keep the environment safe and respectful.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Do I need to create an account?</h3>
              <p className="text-gray-600 text-sm">No account needed. Just open the bot in Telegram and start chatting immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 15% smaller components */}
      <section className="py-14 px-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Ready to Meet Someone New?</h2>
          <p className="text-lg mb-6">Join thousands of people making meaningful connections every day.</p>
          <a
            href="https://t.me/unknwn_chat_bot"
            className="bg-white text-pink-600 px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-base"
          >
            Start Chatting Now <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;