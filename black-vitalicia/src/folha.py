# Folha de contato para conferência: python3 -I src/folha.py <pasta> <saida.jpg> [filtro]
import sys,glob,os
from PIL import Image
pasta,out=sys.argv[1],sys.argv[2];filt=sys.argv[3] if len(sys.argv)>3 else ''
fs=sorted(f for f in glob.glob(pasta+'/**/*.jpg',recursive=True) if filt in f)
w=300;cols=min(len(fs),6);rows=(len(fs)+cols-1)//cols
cell=[(w,int(w*1350/1080)) if 'FEED' in f else (w,int(w*1920/1080)) for f in fs]
H=max(c[1] for c in cell)
S=Image.new('RGB',(cols*w,rows*H),'white')
for k,f in enumerate(fs):
    im=Image.open(f);im=im.resize(cell[k]);S.paste(im,((k%cols)*w,(k//cols)*H))
S.save(out,quality=85);print(len(fs))
