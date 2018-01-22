initSidebarItems({"constant":[["MIME","As per standards for MIME encoded messages"],["STANDARD","Standard character set with padding."],["STANDARD_NO_PAD","Standard character set without padding."],["URL_SAFE","URL-safe character set with padding"],["URL_SAFE_NO_PAD","URL-safe character set without padding"]],"enum":[["CharacterSet","Available encoding character sets"],["DecodeError","Errors that can occur while decoding."],["LineEnding","Line ending used in optional line wrapping."],["LineWrap","Line wrap configuration."]],"fn":[["add_padding","Write padding characters. `output` is the slice where padding should be written, of length at least 2."],["decode","Decode from string reference as octets. Returns a Result containing a Vec. Convenience `decode_config(input, base64::STANDARD);`."],["decode_chunk",""],["decode_config","Decode from string reference as octets. Returns a Result containing a Vec."],["decode_config_buf","Decode from string reference as octets. Writes into the supplied buffer to avoid allocation. Returns a Result containing an empty tuple, aka ()."],["encode","Encode arbitrary octets as base64. Returns a String. Convenience for `encode_config(input, base64::STANDARD);`."],["encode_config","Encode arbitrary octets as base64. Returns a String."],["encode_config_buf","Encode arbitrary octets as base64. Writes into the supplied output buffer, which will grow the buffer if needed."],["encode_config_slice","Encode arbitrary octets as base64. Writes into the supplied output buffer."],["encode_to_slice","Encode input bytes to utf8 base64 bytes. Does not pad or line wrap. `output` must be long enough to hold the encoded `input` without padding or line wrapping. Returns the number of bytes written."],["encode_with_padding_line_wrap","B64-encode, pad, and line wrap (if configured)."],["encoded_size","calculate the base64 encoded string size, including padding and line wraps if appropriate"]],"mod":[["chunked_encoder",""],["display","Enables base64'd output anywhere you might use a `Display` implementation, like a format string."],["line_wrap",""],["tables",""]],"struct":[["Config","Contains configuration parameters for base64 encoding"]]});