import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Blog = () => {
  const blogs = articles;

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Artikel & Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Link to={`/artikel/${blog.slug}`}>
                  <h3 className="text-xl font-bold mb-3 text-primary hover:text-primary-light transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <Link 
                  to={`/artikel/${blog.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-light font-semibold"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
