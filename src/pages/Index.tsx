import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const documents = [
    { title: 'Устав организации', category: 'Документы', year: '2023' },
    { title: 'Отчет о деятельности', category: 'Отчеты', year: '2024' },
    { title: 'Список участников', category: 'Участники', year: '2024' },
    { title: 'История создания', category: 'История', year: '2020' },
  ];

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-amber-500/10"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent mb-6 font-['Playfair_Display']">
              Организация Книги
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-['Inter']">
              Центр знаний и документооборота вашей организации
            </p>
            
            {/* Advanced Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  type="text" 
                  placeholder="Поиск по документам и материалам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-indigo-200 focus:border-amber-400 rounded-xl"
                />
              </div>
              {searchQuery && (
                <div className="mt-4 p-4 bg-white/80 backdrop-blur rounded-xl border border-indigo-100">
                  <p className="text-sm text-gray-600 mb-2">Найдено: {filteredDocs.length} документов</p>
                  <div className="space-y-2">
                    {filteredDocs.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 hover:bg-indigo-50 rounded-lg cursor-pointer">
                        <span className="font-medium">{doc.title}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline">{doc.category}</Badge>
                          <Badge variant="secondary">{doc.year}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid grid-cols-6 mb-8 bg-white/60 backdrop-blur border border-indigo-100">
              <TabsTrigger value="main" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Главная</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">История</TabsTrigger>
              <TabsTrigger value="structure" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Структура</TabsTrigger>
              <TabsTrigger value="members" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Участники</TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Документы</TabsTrigger>
              <TabsTrigger value="contacts" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Контакты</TabsTrigger>
            </TabsList>

            <TabsContent value="main" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover-scale bg-white/80 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <Icon name="BookOpen" className="h-12 w-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-indigo-900">О нас</CardTitle>
                    <CardDescription>Узнайте больше о нашей организации и её миссии</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-indigo-200 hover:bg-indigo-50">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale bg-white/80 backdrop-blur border-amber-100">
                  <CardHeader>
                    <Icon name="Users" className="h-12 w-12 text-amber-600 mb-4" />
                    <CardTitle className="text-amber-900">Наша команда</CardTitle>
                    <CardDescription>Познакомьтесь с участниками и членами организации</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-amber-200 hover:bg-amber-50">Участники</Button>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale bg-white/80 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <Icon name="FileText" className="h-12 w-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-indigo-900">Документы</CardTitle>
                    <CardDescription>Доступ к важным документам и материалам</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-indigo-200 hover:bg-indigo-50">Библиотека</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="animate-fade-in">
              <Card className="bg-white/80 backdrop-blur border-indigo-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-900 font-['Playfair_Display']">История организации</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h3 className="font-bold text-lg text-indigo-900">2020 - Основание</h3>
                      <p className="text-gray-600">Создание организации с целью сохранения и развития знаний</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-6">
                      <h3 className="font-bold text-lg text-amber-900">2022 - Расширение</h3>
                      <p className="text-gray-600">Увеличение числа участников и создание новых отделов</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h3 className="font-bold text-lg text-indigo-900">2024 - Цифровизация</h3>
                      <p className="text-gray-600">Запуск цифровой платформы для работы с документами</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure" className="animate-fade-in">
              <Card className="bg-white/80 backdrop-blur border-indigo-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-900 font-['Playfair_Display']">Структура организации</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="leadership">
                      <AccordionTrigger className="text-indigo-900">Руководство</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-indigo-50 rounded-lg">
                            <h4 className="font-bold">Директор</h4>
                            <p className="text-sm text-gray-600">Общее руководство организацией</p>
                          </div>
                          <div className="p-4 bg-amber-50 rounded-lg">
                            <h4 className="font-bold">Заместитель директора</h4>
                            <p className="text-sm text-gray-600">Координация деятельности отделов</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="departments">
                      <AccordionTrigger className="text-indigo-900">Отделы</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-indigo-50 rounded-lg text-center">
                            <Icon name="Archive" className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                            <h4 className="font-bold">Архивный отдел</h4>
                          </div>
                          <div className="p-4 bg-amber-50 rounded-lg text-center">
                            <Icon name="PenTool" className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                            <h4 className="font-bold">Редакторский отдел</h4>
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-lg text-center">
                            <Icon name="Laptop" className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                            <h4 className="font-bold">IT отдел</h4>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="members" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map((member) => (
                  <Card key={member} className="hover-scale bg-white/80 backdrop-blur border-indigo-100">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Icon name="User" className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-indigo-900">Участник {member}</CardTitle>
                      <CardDescription>Специалист отдела</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center gap-2">
                        <Badge variant="outline">Активный</Badge>
                        <Badge variant="secondary">2024</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents" className="animate-fade-in">
              <Card className="bg-white/80 backdrop-blur border-indigo-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-900 font-['Playfair_Display']">Документы и материалы</CardTitle>
                  <CardDescription>Расширенный поиск по базе документов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {['Все', 'Уставы', 'Отчеты', 'Протоколы'].map((category) => (
                      <Button key={category} variant="outline" className="border-indigo-200 hover:bg-indigo-50">
                        {category}
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-indigo-50/50 rounded-lg hover:bg-indigo-100/50 cursor-pointer transition-colors">
                        <div className="flex items-center gap-4">
                          <Icon name="FileText" className="h-6 w-6 text-indigo-600" />
                          <div>
                            <h4 className="font-medium text-indigo-900">{doc.title}</h4>
                            <p className="text-sm text-gray-600">{doc.category} • {doc.year}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-indigo-200">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <CardTitle className="text-indigo-900">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="h-5 w-5 text-indigo-600" />
                      <span>г. Москва, ул. Примерная, д. 123</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="h-5 w-5 text-indigo-600" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" className="h-5 w-5 text-indigo-600" />
                      <span>info@organization.ru</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 backdrop-blur border-amber-100">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Режим работы</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;