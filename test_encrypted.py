iykgsa wasica
wsgy Ksukag.Kikess iykgsa OSW
wsgy Ksukag.Eaiu.Kcooica iykgsa kco, eckco

# ===== Kcswcs Kikess =====
osw kcswcs_kikess(kucicasqa: was, weiwa_cygeca: ica, gksscaigc: was = 'scksuka') -> was:
	ksgkswwso_kecsw = []
	wgs kecsckass ic kucicasqa:
		iw kecsckass.iwekkss():
			gcws_gsoiccu = gso('C')
		suiw kecsckass.iwugmss():
			gcws_gsoiccu = gso('c')
		suws:
			ksgkswwso_kecsw.ckksco(kecsckass)
			kgcaices
	
		weiwa_oisskaigc = weiwa_cygeca iw gksscaigc == 'scksuka' suws -weiwa_cygeca
		
		csm_kgwiaigc = (gso(kecsckass) - gcws_gsoiccu + weiwa_oisskaigc) % 26
		
		weiwaso_kecs = kes(csm_kgwiaigc + gcws_gsoiccu)
		ksgkswwso_kecsw.ckksco(weiwaso_kecs)
	ssaesc ''.mgic(ksgkswwso_kecsw)

# ===== Iiascèss Kikess =====
osw iiascsss_kikess(yswwcas: was, kikess_qsu: was, gksscaigc: was = 'scksuka') -> was:
	cgsycuiyso_qsu = kikess_qsu.ekkss()
	qsu_uscaae = usc(cgsycuiyso_qsu)
	ksgkswwso_kecsw = []
	kesssca_qsu_icosq = 0
	
	wgs gsiaiccu_kecs ic yswwcas:
		iw cga gsiaiccu_kecs.iwcukec():
			ksgkswwso_kecsw.ckksco(gsiaiccu_kecs)
			kgcaices
			
		qsu_weiwa_icues = gso(cgsycuiyso_qsu[kesssca_qsu_icosq % qsu_uscaae]) - gso('C')
		iw gksscaigc == 'osksuka':
			qsu_weiwa_icues = -qsu_weiwa_icues
			
		ksgkswwso_kecs = kcswcs_kikess(gsiaiccu_kecs, qsu_weiwa_icues, gksscaigc)
		ksgkswwso_kecsw.ckksco(ksgkswwso_kecs)
		kesssca_qsu_icosq += 1
		
	ssaesc ''.mgic(ksgkswwso_kecsw)

# ===== Gcs-Aiys Kco (QGS isswigc) =====
osw gcs_aiys_kco_scksuka(kucicasqa: was, scksukaigc_qsu: was) -> was:
	iw usc(scksukaigc_qsu) != usc(kucicasqa):
		sciws IcuesSssgs("Scksukaigc qsu yewa ycake kucicasqa uscaae")
	ssaesc ''.mgic(kes(gso(kucicasqa_kecs) ^ gso(qsu_kecs)) 
				 wgs kucicasqa_kecs, qsu_kecs ic yik(kucicasqa, scksukaigc_qsu))

# ===== OSW Scksukaigc =====
osw osw_scksuka(kucicasqa: was, osw_qsu: was) -> guasw:
	osw_kikess = OSW.csm(osw_qsu.sckgos(), OSW.YGOS_SKG)
	kcooso_ocac = kco(kucicasqa.sckgos(), OSW.gugkq_wiys)
	ssaesc osw_kikess.scksuka(kcooso_ocac)

osw osw_osksuka(kikessasqa: guasw, osw_qsu: was) -> was:
	osw_kikess = OSW.csm(osw_qsu.sckgos(), OSW.YGOS_SKG)
	osksukaso_ocac = osw_kikess.osksuka(kikessasqa)
	ssaesc eckco(osksukaso_ocac, OSW.gugkq_wiys).oskgos()

# ===== Ewss Icasswcks =====
iw __ccys__ == "__ycic__":
	meius Ases:
		ksica("\cWsuska Scksukaigc Ysaego:")
		ksica("1. Kcswcs Kikess\c2. Iiascèss Kikess\c3. Gcs-Aiys Kco\c4. OSW\c5. Sqia")
		ewss_kegiks = ickea("Scass uges wsuskaigc: ")
		
		iw ewss_kegiks == '1':
			ickea_asqa = ickea("Scass asqa ag ksgksww: ")
			weiwa_icues = ica(ickea("Scass weiwa icues (0-25): "))
			gksscaigc_ygos = ickea("Keggws gksscaigc [scksuka/osksuka]: ").ugmss()[0]
			ksgkswwso_asqa = kcswcs_kikess(ickea_asqa, weiwa_icues, 
										 'osksuka' iw gksscaigc_ygos == 'o' suws 'scksuka')
			
		suiw ewss_kegiks == '2':
			ickea_asqa = ickea("Scass asqa ag ksgksww: ")
			kikess_qsu = ickea("Scass scksukaigc qsu: ")
			gksscaigc_ygos = ickea("Keggws gksscaigc [scksuka/osksuka]: ").ugmss()[0]
			ksgkswwso_asqa = iiascsss_kikess(ickea_asqa, kikess_qsu, 
										   'osksuka' iw gksscaigc_ygos == 'o' suws 'scksuka')
			
		suiw ewss_kegiks == '3':
			ickea_asqa = ickea("Scass asqa ag scksuka: ")
			kco_qsu = ickea("Scass gcs-aiys qsu (sqcka uscaae ssoeisso): ")
			scksukaso_asqa = gcs_aiys_kco_scksuka(ickea_asqa, kco_qsu)
			ksica(w"Scksukaso Ssweua: {scksukaso_asqa}")
			ksica(w"Osksukaigc Aswa: {gcs_aiys_kco_scksuka(scksukaso_asqa, kco_qsu)}")
			kgcaices
			
		suiw ewss_kegiks == '4':
			ickea_asqa = ickea("Scass asqa: ")
			osw_qsu = ickea("8-kecsckass OSW qsu: ").umewa(8)[:8]
			gksscaigc_ygos = ickea("Keggws gksscaigc [scksuka/osksuka]: ").ugmss()[0]
			
			iw gksscaigc_ygos == 's':
				scksukaigc_ssweua = osw_scksuka(ickea_asqa, osw_qsu).esq()
			suws:
				kikessasqa_esq = ickea_asqa
				osksukaigc_ssweua = osw_osksuka(guasw.wsgyesq(kikessasqa_esq), osw_qsu)
				ksgkswwso_asqa = osksukaigc_ssweua
				
		suiw ewss_kegiks == '5':
			ksica("Sqiaica ksgascy...")
			gsscq
			
		suws:
			ksica("Icicuio wsuskaigc, kuscws asu cacic")
			kgcaices
			
		ksica(w"\cKsgkswwica Ssweua: {ksgkswwso_asqa}")
