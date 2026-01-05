'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  const hotelSections = [
    {
      title: 'Героный раздел',
      description: 'Управление главной изображением и текстом',
      href: '/admin/dashboard/hero',
      icon: '🎬',
    },
    {
      title: 'О нас',
      description: 'Управление разделом "О нас"',
      href: '/admin/dashboard/about',
      icon: '📝',
    },
    {
      title: 'Номера',
      description: 'Управление типами номеров и изображениями',
      href: '/admin/dashboard/rooms',
      icon: '🏨',
    },
    {
      title: 'Предложения',
      description: 'Управление специальными предложениями',
      href: '/admin/dashboard/offers',
      icon: '🎁',
    },
        {
      title: 'Контакты',
      description: 'Управление адресом и контактной информацией',
      href: '/admin/dashboard/contact',
      icon: '📍',
    },

  ];

  const restaurantSections = [
    {
      title: 'Героный раздел ресторана',
      description: 'Управление главной страницей ресторана',
      href: '/admin/dashboard/restaurant-hero',
      icon: '🍷',
    },
    {
      title: 'О ресторане',
      description: 'Управление разделом "О ресторане"',
      href: '/admin/dashboard/restaurant-about',
      icon: '👨‍🍳',
    },
    {
      title: 'Галерея ресторана',
      description: 'Управление фотографиями блюд и интерьера',
      href: '/admin/dashboard/restaurant-gallery',
      icon: '📷',
    },
    {
      title: 'Бронирование столиков',
      description: 'Управление информацией о бронировании',
      href: '/admin/dashboard/restaurant-reservation',
      icon: '📅',
    },
    {
      title: 'Меню',
      description: 'Управление меню ресторана',
      href: '/admin/dashboard/menu',
      icon: '🍽️',
    },
  ];

  // const generalSections = [
  //   {
  //     title: 'Навигация',
  //     description: 'Управление логотипом и телефонами в шапке',
  //     href: '/admin/dashboard/navbar',
  //     icon: '🧭',
  //   },

  //   {
  //     title: 'Футер',
  //     description: 'Управление контактами и ссылками в футере',
  //     href: '/admin/dashboard/footer',
  //     icon: '🔗',
  //   },
  // ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Панель управления контентом</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>🏨</span> Отель
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelSections.map(section => (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>🍽️</span> Ресторан
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantSections.map(section => (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-green-600"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>⚙️</span> Общие настройки
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalSections.map(section => (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-gray-600"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </AdminLayout>
  );
}
