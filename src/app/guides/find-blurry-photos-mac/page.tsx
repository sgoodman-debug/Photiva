import { GuidePage } from "@/components/seo/GuidePage";
import { buildGuideMetadata, getGuide } from "@/lib/seo-guides";

const guide = getGuide("find-blurry-photos-mac");

export const metadata = buildGuideMetadata(guide);

export default function FindBlurryPhotosMacPage() {
  return <GuidePage slug="find-blurry-photos-mac" />;
}
