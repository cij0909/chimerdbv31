/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.com.chimerdbv31.chimerseq.obj;

import java.util.ArrayList;
import java.util.List;
import org.com.chimerdbv31.chimerseq.vo.Gff3Vo;

/**
 *
 * @author insoo078
 */
public class TranscriptObj extends Gff3Vo{
	private List<Gff3Vo> exons;
	
	public TranscriptObj() {
		this.exons = new ArrayList<Gff3Vo>();
	}
	
	public void addExon( Gff3Vo exonFeaure ) {
		this.exons.add(exonFeaure);
	}
}