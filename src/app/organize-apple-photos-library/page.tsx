import { GuidePage } from "@/components/seo/GuidePage";
import { buildGuideMetadata, getGuide } from "@/lib/seo-guides";

const guide = getGuide("organize-apple-photos-library");

export const metadata = buildGuideMetadata(guide);

export default function OrganizeApplePhotosLibraryPage() {
  return <GuidePage slug="organize-apple-photos-library" />;
}
