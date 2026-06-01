import SobrePamelaSection from '../components/SobrePamelaSection';
import EducacionPodcastSection from '../components/EducacionPodcastSection';
import Layout from '../components/Layout';

export default function PamelaPage() {
  return (
    <Layout>
      <div className="pt-8">
        <SobrePamelaSection />
        <EducacionPodcastSection />
      </div>
    </Layout>
  );
}
