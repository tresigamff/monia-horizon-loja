import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Crown, Sparkles, Gift, Users, MessageCircle, HelpCircle, ShoppingCart, Zap, Diamond, Gamepad2 } from 'lucide-react'

export default function MoniaHorizonStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-amber-900">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/minecraft-sunset-blocks.png')"
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              🌌 MONIA HORIZON
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 mt-4 font-semibold">
              Loja Oficial - Sua aventura começa aqui!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold shadow-lg transform hover:scale-105 transition-all">
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar no Discord
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold shadow-lg transform hover:scale-105 transition-all">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Jogar Agora
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* VIP Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-3xl blur-xl"></div>
          <Card className="relative bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-yellow-400 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Crown className="h-16 w-16 text-yellow-500 animate-bounce" />
              </div>
              <CardTitle className="text-4xl font-bold text-amber-800 mb-2">
                VIP Monia Horizon
              </CardTitle>
              <CardDescription className="text-xl text-amber-700">
                <span className="font-bold text-2xl">R$ 20,00</span> • Duração: 2 semanas
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Minecraft Benefits */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-green-800 flex items-center">
                    <Sparkles className="mr-2 h-6 w-6" />
                    Benefícios no Minecraft
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Tag exclusiva no jogo: 「VIP」",
                      "Kit especial com itens OP",
                      "Destaque no chat",
                      "1 kit aleatório todo final de semana",
                      "Acesso à área VIP",
                      "Partículas exclusivas no lobby",
                      "Pet especial (visual)"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-green-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discord Benefits */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800 flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Benefícios no Discord
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Nome colorido",
                      "Tag exclusiva: 「💎 VIP」",
                      "Acesso antecipado a eventos",
                      "Canal exclusivo para VIPs",
                      "Sorteios mensais apenas para VIPs"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-blue-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="bg-yellow-300" />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-800">Pacotes Especiais Disponíveis:</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                    Combo VIP + Kit Farm com desconto
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-3 py-1">
                    Assinatura VIP Mensal com benefícios acumulativos
                  </Badge>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-amber-900 px-12 py-4 text-xl font-bold shadow-xl transform hover:scale-105 transition-all">
                  <Crown className="mr-2 h-6 w-6" />
                  Adquirir VIP
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Items Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 flex items-center justify-center">
            <ShoppingCart className="mr-3 h-10 w-10" />
            Itens Minecraft
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Spawner + egg aleatório", price: "R$ 30", icon: "🥚" },
              { name: "Elytra Encantada", price: "R$ 15", icon: "🪶" },
              { name: "Kit Farm Completo", price: "R$ 5", icon: "🌾" },
              { name: "Kit de Partículas Exclusivas", price: "R$ 10", icon: "✨" },
              { name: "Pet Personalizado", price: "R$ 20", icon: "🐕" },
              { name: "Pacote de Skins Exclusivas", price: "R$ 15", icon: "👤" },
              { name: "Gift Card de Créditos", price: "Valores variados", icon: "🎁" }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 hover:border-green-500 transition-all hover:shadow-lg transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg text-green-800">{item.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-green-600">
                    {item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Points System */}
        <section>
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 border-2 border-purple-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-purple-800 flex items-center justify-center">
                <Gift className="mr-3 h-8 w-8" />
                Sistema de Pontos e Recompensas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <span className="text-purple-800">Cada compra gera pontos que podem ser trocados por itens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Diamond className="h-6 w-6 text-blue-500" />
                  <span className="text-purple-800">Clientes frequentes recebem bônus e descontos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 flex items-center justify-center">
            <Users className="mr-3 h-10 w-10" />
            Avaliações e Suporte
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-blue-800">Avaliações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">
                  Área para jogadores deixarem feedback sobre produtos comprados
                </p>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Ver Avaliações
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-2 border-orange-300">
              <CardHeader className="text-center">
                <HelpCircle className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-orange-800">FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-center">
                  Respostas para dúvidas frequentes sobre nossos produtos
                </p>
                <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                  Ver FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-teal-100 border-2 border-green-300">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-green-800">Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-center">
                  Canal de suporte no Discord para ajuda rápida
                </p>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Abrir Suporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 text-yellow-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🌌 MONIA HORIZON</h3>
          <p className="mb-4">A melhor experiência de Minecraft te espera!</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              Discord
            </Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              Instagram
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
