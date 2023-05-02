export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface UserI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
