import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioCard = ({ item }) => {
  return (
    <section>
      <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group">
        <div className="aspect-w-1 aspect-h-1 relative w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            fill
            src={item.coverImage.url}
            alt={''}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
        <p className="text-md mt-1 font-medium text-gray-900"></p>
      </Link>
    </section>
  );
};

export default PortfolioCard;
