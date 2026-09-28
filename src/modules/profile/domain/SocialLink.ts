export interface SocialLinkPrimitive {
  label: string;
  url: string;
}

export class SocialLink {
  private constructor(
    private readonly label: string,
    private readonly url: string,
  ) {}

  static create(data: SocialLinkPrimitive): SocialLink {
    SocialLink.ensureLinkIsValid(data);
    return new SocialLink(data.label.trim(), data.url);
  }

  static fromPrimitive(data: SocialLinkPrimitive): SocialLink {
    return SocialLink.create(data);
  }

  static ensureLinkIsValid(data: SocialLinkPrimitive): void {
    if (!data.label?.trim()) throw new Error('[SocialLink] El enlace necesita nombre');
    if (!/^(https:\/\/|mailto:)/.test(data.url)) {
      throw new Error(`[SocialLink] URL no válida para "${data.label}": usa https:// o mailto:`);
    }
  }

  getLabel(): string { return this.label; }
  getUrl(): string { return this.url; }

  equals(other: SocialLink): boolean {
    return this.url === other.url;
  }

  toPrimitive(): SocialLinkPrimitive {
    return { label: this.label, url: this.url };
  }
}
