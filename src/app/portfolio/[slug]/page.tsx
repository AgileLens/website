import Link from 'next/link';
import { projects, getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import ImageGallery from '@/components/ImageGallery';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.name} | Agile Lens` : 'Project | Agile Lens',
    description: project?.overview || '',
  };
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&\s]+)/);
  return match ? match[1] : null;
}

function extractVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link href="/portfolio" className="text-pink hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const yearDisplay = project.yearStarted && project.yearCompleted
    ? (project.yearStarted === project.yearCompleted ? project.yearStarted : `${project.yearStarted} - ${project.yearCompleted}`)
    : project.yearStarted
      ? `${project.yearStarted} - Present`
      : '';

  const youtubeId = project.video ? extractYouTubeId(project.video) : null;
  const vimeoId = project.video ? extractVimeoId(project.video) : null;

  const linksList = project.links
    ? project.links.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const pressList = project.press
    ? project.press.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const creditLines = project.credits
    ? project.credits.split('\n').map(l => l.trim()).filter(Boolean)
    : [];

  const category = project.category1 || 'Project';

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted hover:text-pink transition-colors mb-8">
        <span>&larr;</span> Back to Portfolio
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-wider text-pink font-semibold">{category}</span>
          {project.category2 && (
            <>
              <span className="text-muted">/</span>
              <span className="text-xs uppercase tracking-wider text-pink font-semibold">{project.category2}</span>
            </>
          )}
          {yearDisplay && (
            <>
              <span className="text-muted">|</span>
              <span className="text-xs text-muted">{yearDisplay}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6">{project.name}</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <ImageGallery images={project.images} projectName={project.name} />

          {project.overview && (
            <div>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-muted leading-relaxed text-base">{project.overview}</p>
            </div>
          )}

          {project.description && (
            <div>
              <h2 className="text-xl font-bold mb-4">About the Project</h2>
              {project.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted leading-relaxed text-base mb-4">{para}</p>
              ))}
            </div>
          )}

          {youtubeId && (
            <div>
              <h2 className="text-xl font-bold mb-4">Video</h2>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`${project.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
          {vimeoId && !youtubeId && (
            <div>
              <h2 className="text-xl font-bold mb-4">Video</h2>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}`}
                  title={`${project.name} video`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {creditLines.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Credits and Collaborators</h2>
              <div className="space-y-1">
                {creditLines.map((line, i) => (
                  <p key={i} className="text-sm text-muted">{line}</p>
                ))}
              </div>
            </div>
          )}

          {project.additionalContributors && (
            <div>
              <h2 className="text-xl font-bold mb-4">Additional Contributors</h2>
              <p className="text-sm text-muted leading-relaxed">{project.additionalContributors}</p>
            </div>
          )}

          {project.papers && (
            <div>
              <h2 className="text-xl font-bold mb-4">Published Papers</h2>
              <p className="text-sm text-muted leading-relaxed">{project.papers}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-surface space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-pink">Project Details</h3>

            {yearDisplay && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Year</div>
                <div className="text-sm font-medium">{yearDisplay}</div>
              </div>
            )}

            {project.clients && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Client / Partner</div>
                <div className="text-sm font-medium">{project.clients}</div>
              </div>
            )}

            {project.platform && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Platform</div>
                <div className="text-sm font-medium">{project.platform}</div>
              </div>
            )}

            {project.tech && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Tech Stack</div>
                <div className="text-sm font-medium">{project.tech}</div>
              </div>
            )}

            {project.awards && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Awards</div>
                <div className="text-sm font-medium text-yellow-400">{project.awards}</div>
              </div>
            )}

            {project.status && (
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Status</div>
                <div className="text-sm font-medium">{project.status}</div>
              </div>
            )}
          </div>

          {pressList.length > 0 && (
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-sm font-bold uppercase tracking-wider text-pink mb-4">Press</h3>
              <div className="space-y-2">
                {pressList.map((item, i) => (
                  <p key={i} className="text-sm text-muted">
                    {item.startsWith('http') ? (
                      <a href={item} target="_blank" rel="noopener noreferrer" className="text-pink hover:underline break-all">{item}</a>
                    ) : item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {linksList.length > 0 && (
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-sm font-bold uppercase tracking-wider text-pink mb-4">Links</h3>
              <div className="space-y-2">
                {linksList.map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="block text-sm text-pink hover:underline break-all">{link}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
        {prev ? (
          <Link href={`/portfolio/${prev.slug}`} className="group flex items-center gap-2 text-sm text-muted hover:text-pink transition-colors">
            <span>&larr;</span>
            <div>
              <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
              <div className="font-medium group-hover:text-pink">{prev.name}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/portfolio/${next.slug}`} className="group flex items-center gap-2 text-sm text-muted hover:text-pink transition-colors text-right">
            <div>
              <div className="text-xs uppercase tracking-wider mb-1">Next</div>
              <div className="font-medium group-hover:text-pink">{next.name}</div>
            </div>
            <span>&rarr;</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
