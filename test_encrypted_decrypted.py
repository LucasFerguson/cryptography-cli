VLXT`N JN`VPN
J`TL 8`HXNT.8VXR`` VLXT`N <@*
J`TL 8`HXNT.2NVH.8P\\VPN VLXT`N XP\, RPXP\

# ===== 8P`JP` 8VXR`` =====
\`J XP`JP`_XVXR``(XHPVPN`^N: JN`, JRVJN_PLTRPN: VPN, TX``PNVTP: JN` = '`PX`HXN') -> JN`:
	X`TX`JJ`\_XRP`J = []
	JT` XRP`PXN`` VP XHPVPN`^N:
		VJ XRP`PXN``.VJRXX``():
			TPJ`_T`\VPPH = T`\('0')
		`HVJ XRP`PXN``.VJHTZ``():
			TPJ`_T`\VPPH = T`\('P')
		`HJ`:
			X`TX`JJ`\_XRP`J.PXX`P\(XRP`PXN``)
			XTPNVPR`
	
		JRVJN_\V``XNVTP = JRVJN_PLTRPN VJ TX``PNVTP == '`PX`HXN' `HJ` -JRVJN_PLTRPN
		
		P`Z_XTJVNVTP = (T`\(XRP`PXN``) - TPJ`_T`\VPPH + JRVJN_\V``XNVTP) % 26
		
		JRVJN`\_XRP` = XR`(P`Z_XTJVNVTP + TPJ`_T`\VPPH)
		X`TX`JJ`\_XRP`J.PXX`P\(JRVJN`\_XRP`)
	``NR`P ''.ZTVP(X`TX`JJ`\_XRP`J)

# ===== 6VN`Pè`` 8VXR`` =====
\`J VVN`P```_XVXR``(L`JJPN`: JN`, XVXR``_^`H: JN`, TX``PNVTP: JN` = '`PX`HXN') -> JN`:
	PT`LPHVL`\_^`H = XVXR``_^`H.RXX``()
	^`H_H`PNNR = H`P(PT`LPHVL`\_^`H)
	X`TX`JJ`\_XRP`J = []
	XR```PN_^`H_VP\`^ = 0
	
	JT` T`VNVPPH_XRP` VP L`JJPN`:
		VJ PTN T`VNVPPH_XRP`.VJPHXRP():
			X`TX`JJ`\_XRP`J.PXX`P\(T`VNVPPH_XRP`)
			XTPNVPR`
			
		^`H_JRVJN_VPHR` = T`\(PT`LPHVL`\_^`H[XR```PN_^`H_VP\`^ % ^`H_H`PNNR]) - T`\('0')
		VJ TX``PNVTP == '\`X`HXN':
			^`H_JRVJN_VPHR` = -^`H_JRVJN_VPHR`
			
		X`TX`JJ`\_XRP` = XP`JP`_XVXR``(T`VNVPPH_XRP`, ^`H_JRVJN_VPHR`, TX``PNVTP)
		X`TX`JJ`\_XRP`J.PXX`P\(X`TX`JJ`\_XRP`)
		XR```PN_^`H_VP\`^ += 1
		
	``NR`P ''.ZTVP(X`TX`JJ`\_XRP`J)

# ===== 4P`-.VL` 8P\ (>4@ V``JVTP) =====
\`J TP`_NVL`_XP\_`PX`HXN(XHPVPN`^N: JN`, `PX`HXNVTP_^`H: JN`) -> JN`:
	VJ H`P(`PX`HXNVTP_^`H) != H`P(XHPVPN`^N):
		`PVJ` 6PHR`@``T`("@PX`HXNVTP ^`H LRJN LPNXR XHPVPN`^N H`PNNR")
	``NR`P ''.ZTVP(XR`(T`\(XHPVPN`^N_XRP`) ^ T`\(^`H_XRP`)) 
				 JT` XHPVPN`^N_XRP`, ^`H_XRP` VP LVX(XHPVPN`^N, `PX`HXNVTP_^`H))

# ===== <@* @PX`HXNVTP =====
\`J \`J_`PX`HXN(XHPVPN`^N: JN`, \`J_^`H: JN`) -> THN`J:
	\`J_XVXR`` = <@*.P`Z(\`J_^`H.`PXT\`(), <@*.,4<@_@84)
	XP\\`\_\PNP = XP\(XHPVPN`^N.`PXT\`(), <@*.THTX^_JVL`)
	``NR`P \`J_XVXR``.`PX`HXN(XP\\`\_\PNP)

\`J \`J_\`X`HXN(XVXR``N`^N: THN`J, \`J_^`H: JN`) -> JN`:
	\`J_XVXR`` = <@*.P`Z(\`J_^`H.`PXT\`(), <@*.,4<@_@84)
	\`X`HXN`\_\PNP = \`J_XVXR``.\`X`HXN(XVXR``N`^N)
	``NR`P RPXP\(\`X`HXN`\_\PNP, <@*.THTX^_JVL`).\`XT\`()

# ===== 2J`` 6PN``JPX` =====
VJ __PPL`__ == "__LPVP__":
	ZRVH` .`R`:
		X`VPN("\P*`H`XN @PX`HXNVTP ,`NRT\:")
		X`VPN("1. 8P`JP` 8VXR``\P2. 6VN`Pè`` 8VXR``\P3. 4P`-.VL` 8P\\P4. <@*\P5. @^VN")
		RJ``_XRTVX` = VPXRN("@PN`` HTR` J`H`XNVTP: ")
		
		VJ RJ``_XRTVX` == '1':
			VPXRN_N`^N = VPXRN("@PN`` N`^N NT X`TX`JJ: ")
			JRVJN_VPHR` = VPN(VPXRN("@PN`` JRVJN VPHR` (0-25): "))
			TX``PNVTP_LT\` = VPXRN("8RTTJ` TX``PNVTP [`PX`HXN/\`X`HXN]: ").HTZ``()[0]
			X`TX`JJ`\_N`^N = XP`JP`_XVXR``(VPXRN_N`^N, JRVJN_VPHR`, 
										 '\`X`HXN' VJ TX``PNVTP_LT\` == '\' `HJ` '`PX`HXN')
			
		`HVJ RJ``_XRTVX` == '2':
			VPXRN_N`^N = VPXRN("@PN`` N`^N NT X`TX`JJ: ")
			XVXR``_^`H = VPXRN("@PN`` `PX`HXNVTP ^`H: ")
			TX``PNVTP_LT\` = VPXRN("8RTTJ` TX``PNVTP [`PX`HXN/\`X`HXN]: ").HTZ``()[0]
			X`TX`JJ`\_N`^N = VVN`P```_XVXR``(VPXRN_N`^N, XVXR``_^`H, 
										   '\`X`HXN' VJ TX``PNVTP_LT\` == '\' `HJ` '`PX`HXN')
			
		`HVJ RJ``_XRTVX` == '3':
			VPXRN_N`^N = VPXRN("@PN`` N`^N NT `PX`HXN: ")
			XP\_^`H = VPXRN("@PN`` TP`-NVL` ^`H (`^PXN H`PNNR ``\RV``\): ")
			`PX`HXN`\_N`^N = TP`_NVL`_XP\_`PX`HXN(VPXRN_N`^N, XP\_^`H)
			X`VPN(J"@PX`HXN`\ @`JRHN: {`PX`HXN`\_N`^N}")
			X`VPN(J"<`X`HXNVTP .`JN: {TP`_NVL`_XP\_`PX`HXN(`PX`HXN`\_N`^N, XP\_^`H)}")
			XTPNVPR`
			
		`HVJ RJ``_XRTVX` == '4':
			VPXRN_N`^N = VPXRN("@PN`` N`^N: ")
			\`J_^`H = VPXRN("8-XRP`PXN`` <@* ^`H: ").HZRJN(8)[:8]
			TX``PNVTP_LT\` = VPXRN("8RTTJ` TX``PNVTP [`PX`HXN/\`X`HXN]: ").HTZ``()[0]
			
			VJ TX``PNVTP_LT\` == '`':
				`PX`HXNVTP_``JRHN = \`J_`PX`HXN(VPXRN_N`^N, \`J_^`H).R`^()
			`HJ`:
				XVXR``N`^N_R`^ = VPXRN_N`^N
				\`X`HXNVTP_``JRHN = \`J_\`X`HXN(THN`J.J`TLR`^(XVXR``N`^N_R`^), \`J_^`H)
				X`TX`JJ`\_N`^N = \`X`HXNVTP_``JRHN
				
		`HVJ RJ``_XRTVX` == '5':
			X`VPN("@^VNVPN X`TN`PL...")
			T``P^
			
		`HJ`:
			X`VPN("6PVPHV\ J`H`XNVTP, XH`PJ` N`H PNPVP")
			XTPNVPR`
			
		X`VPN(J"\P8`TX`JJVPN @`JRHN: {X`TX`JJ`\_N`^N}")
