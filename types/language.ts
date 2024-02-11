export interface HeaderData {
  courses: {
    en?: string
    bn?: string
  }
  certify: {
    en?: string
    bn?: string
  }
  about: {
    en?: string
    bn?: string
  }
  login: {
    en?: string
    bn?: string
  }
  EN: {
    en?: string
    bn?: string
  }
  BN: {
    en?: string
    bn?: string
  }
}

export interface FooterData {
  copyright: {
    en?: string
    bn?: string
  }
  developer: {
    header: {
      en?: string
      bn?: string
    }
    description: {
      en?: string
      bn?: string
    }
  }
  connect: {
    contact: {
      en?: string
      bn?: string
    }
    or: {
      en?: string
      bn?: string
    }
    mail: {
      en?: string
      bn?: string
    }
  }
  link: {
    all_links: {
      en?: string
      bn?: string
    }
    home: {
      en?: string
      bn?: string
    }
    courses: {
      en?: string
      bn?: string
    }
    certify: {
      en?: string
      bn?: string
    }
    about: {
      en?: string
      bn?: string
    }
  }
}

export type SupportedLanguage = 'en' | 'bn'
